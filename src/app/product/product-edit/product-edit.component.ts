import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0
  };

  label: string = 'Add Product';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService
  ) {};

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      if (parseInt(id) > 0) {
        this.label = 'Edit Product';
        this.service.get(id).subscribe(response => this.product = response);
      }
    });
  };

  submit() {
      let id = this.product.id;
      if (id > 0) {
          this.service.put(id, this.product).subscribe(response => this.router.navigate(['/products']));
      } else {
          this.service.post(this.product).subscribe(response => this.router.navigate(['/products']));
      }
  }

}
