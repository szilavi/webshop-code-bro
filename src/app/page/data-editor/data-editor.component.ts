import { getLocaleCurrencyCode } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss'],
})
export class DataEditorComponent implements OnInit {
  productList$: Observable<Product[]> = this.productService.getAll();

  //Kereső
  phrase: string = '';
  filterKey: string = '';

  //Sortolás
  fieldName: string = 'id';
  direction: number = 1;

  //Filter kulcsai
  movieForFilterKeys: any[] = this.configService.adminSearchOptions;

  //CatId megjelenítése

  catList: any[] = this.configService.catIdList;

  constructor(
    private productService: ProductService,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {}

  getSortProp(property: string): void {
    this.fieldName = property;
    if (this.direction === 1) {
      this.direction = 0;
    } else {
      this.direction = 1;
    }
  }

  //Gombok

  deleteBtn(product: Product): void {
    if (confirm('Are you sure?')) {
      this.productService
        .remove(product)
        .subscribe((product) =>
          this.productService
            .getAll()
            .subscribe((productList) => location.reload())
        );
    }
  }

  editBtn(product: Product): void {}

  createBtn(): void {}
}

// if (
//   typeof product.catId === 'string' ||
//   typeof product.active === 'string' ||
//   typeof product.featured === 'string'
// ) {
//   product.catId = Number(product.catId);
//   product.active = Boolean(product.active);
//   product.featured = Boolean(product.featured);
// }
// }

// this.productService
//       .update(product)
//       .subscribe((product) =>
//         this.productService
//           .getAll()
//           .subscribe((products) => console.log('done'))
//       );
