import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { NgModule } from '@angular/core';
import {addBook,removeBook} from './state/books.actions';
import { GoogleBooksService } from './booklist/books.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'; 
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 booksName:string;

  public LibraryForm!: FormGroup;
  books$: Observable<Array<[{}]>>
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  get form(){
    return this.LibraryForm.controls;
  }

  constructor(private store: Store<{books:any}>,
    private formBuilder: FormBuilder) 
  {
    this.books$ =store.select('books')
    this.books$.subscribe((res)=>{
      console.log(res)
    })
   }








  onSubmit(){
    
    let data={
      
      Name:this.form['name'].value,
      page:this.form['page'].value,
      writer:this.form['writer'].value

    }

   
   this.onAdd(data)
   this.LibraryForm.reset({
    'name': '',
    'page': '',
    'writer': '',
    
   });  
  }
  onClickSubmit(result: { username: string; }) {
      console.log("You have entered : " + result.username); 
   }
  
 
  onAdd(bookdata: object) {
    
    this.store.dispatch(addBook({ bookdata }));
  }
 
  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }
  ngOnInit() {
    
       this.LibraryForm = this.formBuilder.group(
    {
          name: [
            //this.defaultAuth.email,
            '',
            Validators.compose([Validators.required]),
          ],
          page: [
            //this.defaultAuth.email,
            '',
            Validators.compose([Validators.required]),
          ],
          writer: [
            //this.defaultAuth.email,
            '',
            Validators.compose([
              Validators.required,
            ]),
          ],
          
        }

      
      
  );






    console.log(this.books$)
   /*  this.booksService
      .getBooks()
      .subscribe((books: any) => this.store.dispatch(retrievedBookList({ books }))); */
  }

}
