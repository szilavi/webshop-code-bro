import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss'],
})
export class Cat02Component implements OnInit {
  dramaMovies$: Observable<Product[]> = this.productService
    .getAll()
    .pipe(map((product) => product.filter((movie) => movie.catId === 2)));

  phrase: string = '';
  filterKey: string = '';

  movieForFilterKeys: any[] = this.configService.searchOptions;

  constructor(
    private productService: ProductService,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {}
}
