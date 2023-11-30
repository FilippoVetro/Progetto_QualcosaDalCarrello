import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/types/product.model';

@Component({
  selector: 'app-product-card-bg',
  templateUrl: './product-card-bg.component.html',
  styleUrls: ['./product-card-bg.component.css'],
})
export class ProductCardBgComponent implements OnInit {
  @Input() product: Product;

  constructor() {}

  ngOnInit(): void {
    console.log(this.product);
  }
}
