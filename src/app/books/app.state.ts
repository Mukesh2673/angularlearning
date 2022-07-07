import { Book } from '../books/booklist/books.modal';

export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}