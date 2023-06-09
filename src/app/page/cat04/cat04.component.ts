import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat04',
  templateUrl: './cat04.component.html',
  styleUrls: ['./cat04.component.scss'],
})
export class Cat04Component implements OnInit {
  romanticMovies$: Observable<Product[]> = this.productService
    .getAll()
    .pipe(map((product) => product.filter((movie) => movie.catId === 4)));

  phrase: string = '';
  filterKey: string = '';

  movieForFilterKeys: any[] = this.configService.searchOptions;

  constructor(
    private productService: ProductService,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {}
}
