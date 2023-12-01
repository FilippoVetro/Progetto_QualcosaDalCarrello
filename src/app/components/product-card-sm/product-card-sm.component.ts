import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/types/product.model';

@Component({
  selector: 'app-product-card-sm',
  templateUrl: './product-card-sm.component.html',
  styleUrls: ['./product-card-sm.component.css'],
})
export class ProductCardSmComponent implements OnInit {
  @Input() product: Product;
  @Input() sizeCard: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.sizeCard);
  }
}
