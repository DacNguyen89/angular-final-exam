import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {BooksService} from '../books.service';


@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  data: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BooksService, private router: Router) {
  }

  ngOnInit() {
    this.data = this.fb.group({
        id: '',
        title: '',
        author: '',
        description: ''
      }
    );
  }

  createBook() {
    this.bookService.createBook(this.data.value).subscribe(next => {
      this.router.navigate(['/home']);
    });
    console.log(this.data.value);
  }
}
