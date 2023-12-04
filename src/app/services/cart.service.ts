import { Injectable } from '@angular/core';
import { Product } from '../types/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Product[] = [];

  constructor() {}

  addToCart(product: Product) {
    this.cartItems.push(product);
  }
  removeFromCart(product: Product) {
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
  }

  getCartItems() {
    return this.cartItems;
  }
}
