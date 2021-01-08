import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Book} from '../book';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  sub: Subscription;
  product: Book = {
    id: 1,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    description: 'Clean Code Book'
  };
  id: number;

  constructor(private productService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  // tslint:disable-next-line:typedef
  updateProduct() {
    this.productService.updateProduct(this.product.id, this.product).subscribe(() => {
      this.router.navigate(['/']);
    });

  }
}
