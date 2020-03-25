import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../product.service';
import { ProductModalComponent } from '../product-modal/product-modal.component';
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
    private modalService: NgbModal,
    private productService: ProductService
  ) { };

  ngOnInit(): void {
    this.productService.list().subscribe(response => this.products = response);
  };

  openProductModal(): void {
    const modalRef = this.modalService.open(ProductModalComponent);

    modalRef.componentInstance.passEntry.subscribe((newProduct) => {
      this.products.push(newProduct);
      this.modalService.dismissAll();
    })
  }

}
