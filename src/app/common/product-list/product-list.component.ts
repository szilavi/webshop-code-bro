import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private config: ConfigService
  ) {}

  allPage: number[] = [];

  page: number = 1;

  productList: Product[] = [];

  ngOnInit(): void {


    this.refreshPage();

    this.productService.getAll().subscribe((datalist) => {
      for (let i = 0; i < Math.ceil(datalist.length / 10); i++) {
        this.allPage.push(i + 1);
      }
    });
  }

  onPage(page: number): void {
    this.page = page;
    this.refreshPage();
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page = this.page - 1;
    }
    this.refreshPage();
  }

  nextPage(): void {
    if (this.page !== this.allPage.length) {
      this.page = this.page + 1;
    }
    this.refreshPage();
  }

  refreshPage(): void {
    this.productService
      .getAll(`?_page=${this.page}&_limit=10`)
      .subscribe((dataList) => (this.productList = dataList));
  }

  //Greg brutál supportjával
}
