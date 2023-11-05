import { PrismaClient } from '@prisma/client';
import { Context } from 'baojs';
import * as BookService from './books.service';

const prisma = new PrismaClient();

export async function getBooks(ctx: Context) {
  return ctx.sendPrettyJson(await BookService.getBooks())
}

export async function createBook(ctx: Context) {
  const book = await BookService.createBook(ctx.params as BookService.CreateBookRequest)

  return ctx.sendPrettyJson(book);
}
