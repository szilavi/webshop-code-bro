import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-create-new-product',
  templateUrl: './create-new-product.component.html',
  styleUrls: ['./create-new-product.component.scss'],
})
export class CreateNewProductComponent implements OnInit {
  product$: Observable<Product> = this.ar.params.pipe(
    switchMap((params) => this.productService.get(params['id']))
  );

  product: Product = new Product();

  catList: any[] = this.configService.catIdList;

  constructor(
    private productService: ProductService,
    private ar: ActivatedRoute,
    private router: Router,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.product$.subscribe((product) => {
      this.product = product;
    });
  }

  onSubmit(product: Product): void {
    product.catId = Number(product.catId);
    product.price = Number(product.price);
    product.stock = Number(product.stock);
    product.active = Boolean(product.active);
    product.featured = Boolean(product.featured);

    if (this.product.id) {
      this.productService
        .update(product)
        .subscribe((product) => this.router.navigate(['/admin']));
    } else if (!this.product.id) {
      this.productService
        .create(product)
        .subscribe((product) => this.router.navigate(['/admin']));
    }
  }
}
