import { Book, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type CreateBookRequest = Omit<Book, "id" | "createdAt" | "updatedAt">;

export async function getBooks(): Promise<Book[]> {
  return await prisma.book.findMany();
}

export async function getBookById(id: number): Promise<Book | null> {
  return await prisma.book.findUnique({
    where: {
      id,
    },
  });
}

export async function createBook(book: CreateBookRequest): Promise<Book> {
  return await prisma.book.create({
    data: book,
  });
}

export async function deleteBook(id: number): Promise<Book | null> {
  return await prisma.book.delete({
    where: {
      id,
    },
  });
}
