import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/product';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'str-angular-project001';

  //productList$: Observable<Product[]> = this.productService.getAll(); ez itt teszt volt csak, de lehet később még kell

  constructor(private productService: ProductService) {}
}
