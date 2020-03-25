import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {
  isModalMode: boolean = true;

  constructor( public activeModal: NgbActiveModal ) { };

  @Output() passEntry: EventEmitter<Product> = new EventEmitter();

  ngOnInit(): void {
  };

  passBack(product: Product, passEntry: EventEmitter<Product>) {
    passEntry.emit(product);
  }


}
