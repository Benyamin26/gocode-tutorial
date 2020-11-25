import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = products

  constructor() { }

  ngOnInit(): void {
  }
  share() {
    window.alert('The product has been shared!');
 }
 onNotify(productName) {
  window.alert('You will be notified when the product ' + productName + 'goes on sale');
}
}
