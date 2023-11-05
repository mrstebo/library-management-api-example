import { Context } from 'baojs';
import * as BookService from './books.service';

export async function getBooks(ctx: Context) {
  return ctx.sendPrettyJson(await BookService.getBooks())
}

export async function createBook(ctx: Context) {
  const book = await BookService.createBook(ctx.params as BookService.CreateBookRequest)

  return ctx.sendPrettyJson(book);
}
