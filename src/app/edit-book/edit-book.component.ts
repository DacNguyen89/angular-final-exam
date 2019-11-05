import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BooksService} from '../books.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IBook} from '../IBook.interface';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  book: IBook;
  data: FormGroup;

  constructor(private route: ActivatedRoute,
              private bookService: BooksService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.data = this.fb.group({
      id: '',
      title: '',
      author: '',
      description: ''
    })
    ;
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getDetail(id).subscribe(
      next => {
        this.book = next;
        this.data.patchValue(this.book);
      },
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }

  editBook() {
    this.bookService.updateBook(this.data.value).subscribe(next => {
      this.router.navigate(['/home']);
    });
  }
}
