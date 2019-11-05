import {Component, OnInit} from '@angular/core';
import {IBook} from '../IBook.interface';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  output: IBook[];

  constructor(private booksService: BooksService) {
    this.booksService.getList().subscribe(next => {
      this.output = next;
      console.log(this.output);
    });
  }

  ngOnInit() {

  }

}
