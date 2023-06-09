import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss'],
})
export class Cat01Component implements OnInit {
  actionMovies$: Observable<Product[]> = this.productService
    .getAll()
    .pipe(map((product) => product.filter((movie) => movie.catId === 1)));

  phrase: string = '';
  filterKey: string = '';

  movieForFilterKeys: any[] = this.configService.searchOptions;

  constructor(
    private productService: ProductService,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {}
}
