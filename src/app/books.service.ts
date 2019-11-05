import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from './IBook.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly API_URL = 'http://localhost:3000/books';

  constructor(private httpClient: HttpClient) {
  }

  getList(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(`${this.API_URL}`);
  }

  getDetail(id: number): Observable<IBook> {
    return this.httpClient.get<IBook>(`${this.API_URL}/${id}`);
  }

}
