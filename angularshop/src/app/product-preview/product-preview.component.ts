import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../model/product";

@Component({
  selector: 'product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})

export class ProductPreviewComponent {

  constructor() { }

  @Input('product') product : Product;
  @Output() deletedProduct = new EventEmitter<Product>();
  @Output() minused = new EventEmitter<Product>();
  @Output() added = new EventEmitter<Product>();


  delete(){
    this.deletedProduct.emit(this.product);
  }

  minus(){
    if(this.product.amount>0){
    this.minused.emit(this.product);
    }
  }

  add(){
    this.added.emit(this.product);
  }
}
