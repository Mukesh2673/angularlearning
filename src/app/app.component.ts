import { Component } from '@angular/core';    
import { Store } from '@ngrx/store';
import { selectBookCollection, selectBooks } from './books/books.selector';
import {retrievedBookList,addBook,removeBook} from './books/Action/books.action';
import { GoogleBooksService } from './books/books.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent{

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);
 
  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }
 
  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }
 
  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {
    this.booksService
    .getBooks()
    .subscribe((books:any) =>{
       this.store.dispatch(retrievedBookList({ books }))
      });
  }
 
  ngOnInit() {
    let books$ = this.store.select(selectBooks);
   console.log(books$)
  
}
}
