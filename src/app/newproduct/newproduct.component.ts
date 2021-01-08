import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  product: Book = {
    id: -1,
    title: ' ',
    author: ' ',
    description: ' '
  };

  constructor(private productService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  createProduct() {
    this.productService.createProduct(this.product)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
