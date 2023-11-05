import { Context } from "baojs";
import * as BookService from "./books.service";

export async function getBooks(ctx: Context) {
  return ctx.sendPrettyJson(await BookService.getBooks());
}

export async function getBook(ctx: Context) {
  const id = Number(ctx.params.id);
  const book = await BookService.getBookById(id);

  if (!book) {
    return ctx.sendText(`Book with id ${id} not found`, { status: 404 });
  }

  return ctx.sendPrettyJson(book);
}

export async function createBook(ctx: Context) {
  const body = await ctx.req.json();
  const book = await BookService.createBook(body as BookService.CreateBookRequest);

  return ctx.sendPrettyJson(book);
}
