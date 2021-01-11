import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Book} from '../book';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  sub: Subscription;
  book: Book = {
    id: 1,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    description: 'Clean Code Book'
  };
  id: number;

  constructor(private bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBook(this.id);
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getBook(id: number) {
    this.bookService.getBook(id).subscribe(book => {
      this.book = book;
    });
  }

  // tslint:disable-next-line:typedef
  updateBook() {
    this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
      alert("Đã cập nhật!")

      this.router.navigate(['/']);
    });

  }
}
