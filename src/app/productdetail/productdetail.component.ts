import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  product: Book;
  id: number;

  constructor(private productService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  ngOnInit()
    :
    void {
  }

  // tslint:disable-next-line:typedef
  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }
}
