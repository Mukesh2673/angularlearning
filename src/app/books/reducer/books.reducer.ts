import { createReducer, on } from '@ngrx/store';

import { retrievedBookList } from '../Action/books.action';
import { Book } from '../booklist/books.modal';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books)
);