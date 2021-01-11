import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll() {
    this.bookService.getAllBook().subscribe(books => {
      this.books = books;
    });
  }

}
