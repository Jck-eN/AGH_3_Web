import { Component, OnInit, Output } from '@angular/core';
import { Product } from "../model/product";
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;

  active : Product;
  productsService : ProductsService;

  constructor(productsService : ProductsService) {
    this.productsService = productsService;
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.active = this.products[0];
  }

  activateProduct(product: Product){
    this.active = product;
  }

  deleteProduct(p : Product){
    this.products.splice(this.products.indexOf(p), 1);
    this.active= this.products[0];
  }
  minus(p : Product){
    p.amount--;
  }
  add(p : Product){
    p.amount++;
  }

}


