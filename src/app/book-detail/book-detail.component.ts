import {Component, OnInit} from '@angular/core';
import {IBook} from '../IBook.interface';
import {BooksService} from '../books.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  output: IBook;

  constructor(private booksService: BooksService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.booksService.getDetail(id).subscribe(
      next => (this.output = next),
      error => {
        console.log(error);
        this.output = null;
      }
    );
  }

}
