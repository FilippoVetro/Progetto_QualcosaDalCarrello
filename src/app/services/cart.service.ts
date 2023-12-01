import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];

  constructor() { }

  addToCart(product: any) {
    this.cartItems.push(product);
    console.log('Product added to cart:', product);
  }

  getCartItems() {
    return this.cartItems;
  }
}