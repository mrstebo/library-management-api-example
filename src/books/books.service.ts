import { Book, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type CreateBookRequest = Omit<Book, 'id' | 'createdAt' | 'updatedAt'>;

export async function getBooks(): Promise<Book[]> {
  return await prisma.book.findMany();
}

export async function createBook(book: CreateBookRequest): Promise<Book> {
  return await prisma.book.create({
    data: book,
  });
}
