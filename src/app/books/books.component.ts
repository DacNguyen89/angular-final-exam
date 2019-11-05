import {Component, OnInit} from '@angular/core';
import {IBook} from '../IBook.interface';
import {BooksService} from '../books.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  output: IBook[];
  book: IBook;

  constructor(private booksService: BooksService, private router: Router) {
    this.booksService.getList().subscribe(next => {
      this.output = next;
      console.log(this.output);
    });
  }

  ngOnInit() {
  }

  deleteBook(i: number) {
    this.booksService.deleteBook(i).subscribe(() => {
      this.output = this.output.filter(t => t.id !== i);
    }, this.errorHandle);
  }

  errorHandle(error: any) {
    alert('Error, contact admin for more information !!!');
  }

}
