import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Product[]>('http://localhost:3000/posts');
  }

  get(id: number | string) {
    return this.http.get<Product>('http://localhost:3000/posts/'+id);
  }
}
