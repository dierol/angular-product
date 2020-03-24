import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { };

  ngOnInit(): void {
    this.productService.list().subscribe(response => this.products = response);
  };

}
