import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailModulComponent } from '../product-detail-modul/product-detail-modul.component';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/types/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Product[];

  constructor(private dialog: MatDialog, private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((cartItems) => {
      this.cartItems = cartItems;
    });
  }
}
