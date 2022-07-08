import { createReducer, on } from '@ngrx/store';
import { Book } from '../booklist/books.model';
import { addBook,removeBook } from './books.actions';

export var initialState:any = 
 [{
id:1,
Name:'Harry potter',
page:'200',
writer:'J. K. Rowling'

}]

export const booksReducer = createReducer(
  initialState,
  //on(retrievedBookList, (state, { books }) => books)
  on(addBook,(state,{bookdata})=>{
    bookdata={id:state.length+1,...bookdata}
    state=[...state,bookdata]
    return state
  
  }),
  on(removeBook,(state,{bookId})=>{
  state = state.filter((d:any)=> {
      return d.id!=bookId

    });
    
  return state
  })
  

);