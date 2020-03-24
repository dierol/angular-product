import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'none'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  list(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  get(id: number | string): Observable<Product> {
    return this.http.get<Product>('http://localhost:3000/products/'+id);
  }

  post(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/products/', product, httpOptions);
  }

  put(id: number | string, product: Product): Observable<Product> {
    return this.http.put<Product>('http://localhost:3000/products/'+id, product, httpOptions);
  }
}
