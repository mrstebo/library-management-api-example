import { Bao } from "baojs";
import { createBook, getBook, getBooks } from "./books.controller";

export const Router = (app: Bao) => {
  app.get("/books", getBooks);
  app.get("/books/:id", getBook);
  app.post("/books", createBook);
};