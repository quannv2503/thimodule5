import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  products: Book[] = [];

  constructor(private productService: BookService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll(): Book[] {
    this.productService.getAllProduct().subscribe(products => {
      this.products = products;
    });
    return this.products;
  }

  sizeBook(): number {
    return this.getAll().length;
  };

  // tslint:disable-next-line:typedef
  delete(id: number) {
    if (confirm('Bạn có thực sự muốn xóa?')) {
      this.productService.deleteProduct(id).subscribe(
        next => {
          this.products = this.getAll();
        },
        error => {
          alert('error');
        }
      );
    }
  }


}
