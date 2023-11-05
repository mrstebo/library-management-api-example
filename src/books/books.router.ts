import { Bao } from 'baojs'
import { createBook, getBooks } from './books.controller'

export const Router = (app: Bao) => {
  app.get('/books', getBooks);
  app.post('/books', createBook);
}