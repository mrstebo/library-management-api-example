import { Bao } from "baojs";
import { createBook, deleteBook, getBook, getBooks } from "./books.controller";

export const Router = (app: Bao) => {
  app.get("/books", getBooks);
  app.get("/books/:id", getBook);
  app.post("/books", createBook);
  app.delete("/books/:id", deleteBook);
};
