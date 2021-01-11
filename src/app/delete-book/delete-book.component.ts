import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  book: Book;
  id: number;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute, private router: Router) {
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
      this.book = book;
    });
  }

  delete(id) {
    this.bookService.deleteBook(id).subscribe(
      next => {
      },
      error => {
        alert('error');
      }
    );
    alert('Đã xoá!');
    this.router.navigate(['/']);
  }


}
