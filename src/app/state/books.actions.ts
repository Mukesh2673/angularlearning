import { createAction, props } from '@ngrx/store';
import { Book } from '../booklist/books.model';

export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookdata: Object }>()
);

export const removeBook = createAction(
  '[Book List] Remove Book',
  props<{ bookId: string }>()
);

/* export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ books: ReadonlyArray<Book> }>()
); */