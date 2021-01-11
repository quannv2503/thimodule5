import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';

import {ActivatedRoute, ParamMap} from '@angular/router';
import {Book} from '../book';

@Component({
  selector: 'app-productdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  book: Book;
  id: number;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getBook(id: number) {
    this.bookService.getBook(id).subscribe(book => {
      this.book=book;
    });
  }
}
