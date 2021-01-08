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

  getAllProduct(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('http://localhost:3000/books');
  }

  createProduct(product: Book): Observable<Book> {
    return this.httpClient.post<Book>('http://localhost:3000/books', product);
  }

  getProduct(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`http://localhost:3000/books/${id}`);
  }

  updateProduct(id: number, product: Book): Observable<Book> {
    return this.httpClient.put<Book>(`http://localhost:3000/books/${id}`, product);
  }

  deleteProduct(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(`http://localhost:3000/books/${id}`);
  }
}
