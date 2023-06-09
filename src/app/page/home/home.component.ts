import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movieList$: Observable<Product[]> = this.productService.getAll();

  discountedMovieList$: Observable<Product[]> = this.productService
    .getAll()
    .pipe(map((movie) => movie.filter((mov) => mov.active === true)));

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
}
