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

  deleteBook(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }

  createBook(post: Partial<IBook>): Observable<IBook> {
    return this.httpClient.post<IBook>(`${this.API_URL}`, post);
  }

  updateBook(post: IBook): Observable<IBook> {
    console.log('ok');
    return this.httpClient.put<IBook>(`${this.API_URL}/${post.id}`, post);
  }

}
