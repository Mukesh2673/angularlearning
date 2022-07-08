import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../booklist/books.model';


export const selectBooks = createFeatureSelector('books');

