import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'http://localhost:3000/movies';

  //list: Product[] = []; itt kicsit előretekintettünk :)

  constructor(private http: HttpClient) {}

  //itt is kicsit előremegyünk, jobb a CRUD-ot egyszerre megírni, de erre még ráfér egy ellenőrzés/tesztelés

  getAll(page: string = ''): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}${page}`);
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${product.id}`, product);
  }

  remove(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${product.id}`);
  }
}
