import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BooksComponent} from './books/books.component';
import {CreateBookComponent} from './create-book/create-book.component';


const routes: Routes = [{
  path: 'home',
  component: BooksComponent
},

  {
    path: 'book/:id',
    component: BookDetailComponent
  },
  {
    path: 'create',
    component: CreateBookComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
