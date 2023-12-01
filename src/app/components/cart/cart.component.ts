import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailModulComponent } from '../product-detail-modul/product-detail-modul.component'; 
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems: any[] = [];

  constructor(private dialog: MatDialog,
    private cartService: CartService) {} 

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  openModal(product: any) {
    this.dialog.open(ProductDetailModulComponent, { 
      data: product, 
      width: '500px' 
    });
  }

}
