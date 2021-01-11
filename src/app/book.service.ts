import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';


@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private httpClient: HttpClient) {
  }

  getAllBook(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('http://localhost:3000/books');
  }

  createBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>('http://localhost:3000/books', book);
  }

  getBook(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`http://localhost:3000/books/${id}`);
  }

  updateBook(id: number, product: Book): Observable<Book> {
    return this.httpClient.put<Book>(`http://localhost:3000/books/${id}`, product);
  }

  deleteBook(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(`http://localhost:3000/books/${id}`);
  }
}
