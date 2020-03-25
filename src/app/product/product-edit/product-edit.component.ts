import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @Input() isModalMode: boolean = false;
  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: null
  };
  label: string = 'Add Product';

  @Input() passBack: (product: Product, passEntry: EventEmitter<Product>) => void;

  @Input() passEntry: EventEmitter<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService
  ) {
  };

  ngOnInit(): void {
    console.log(this.isModalMode)
    if (!this.isModalMode) {
      this.route.paramMap.subscribe(params => {
        this.label = 'Edit Product';
        this.service.get(params.get('id')).subscribe(response => this.product = response);
      });
    }
  };

  submit() {
      let id = this.product.id;
      if (!this.isModalMode) {
          this.service.put(id, this.product).subscribe(response => this.router.navigate(['/products']));
      } else {
          this.service.post(this.product).subscribe(response => this.passBack(this.product, this.passEntry));
      }
  }

}
