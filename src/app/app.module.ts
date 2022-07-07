import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { booksReducer } from './books/reducer/books.reducer';
import { collectionReducer } from './books/reducer/collection.reducer';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './books/booklist/book-list.component';
import { BookCollectionComponent } from './books/bookcollection/bookcollection.component';

@NgModule({
  declarations: [
    [AppComponent, BookListComponent, BookCollectionComponent],
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
