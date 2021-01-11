import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit {
  book: Book = {
    id: -1,
    title: ' ',
    author: ' ',
    description: ' '
  };

  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  createBook() {
    this.bookService.createBook(this.book)
      .subscribe(() => {
        this.router.navigate(['/create']);
        this.book.id=-1;
        this.book.title='';
        this.book.author="";
        this.book.description="";
        alert("Đã thêm!")
      });
  }
}
