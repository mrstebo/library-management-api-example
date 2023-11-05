import { Context } from 'baojs';
import * as BookService from './books.service';

export async function getBooks(ctx: Context) {
  return ctx.sendPrettyJson(await BookService.getBooks())
}

export async function createBook(ctx: Context) {
  const body = await ctx.req.json()
  const book = await BookService.createBook(body as BookService.CreateBookRequest)

  return ctx.sendPrettyJson(book);
}
