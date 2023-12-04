import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../types/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  getCartItems(): Product[] {
    return this.cartItemsSubject.value;
  }

  addToCart(product: Product) {
    const currentCartItems = this.getCartItems();
    const updatedCartItems = [...currentCartItems, product];
    this.cartItemsSubject.next(updatedCartItems);
  }

  removeFromCart(product: Product) {
    const currentCartItems = this.getCartItems();
    const updatedCartItems = currentCartItems.filter(
      (item) => item !== product
    );
    this.cartItemsSubject.next(updatedCartItems);
  }
}
