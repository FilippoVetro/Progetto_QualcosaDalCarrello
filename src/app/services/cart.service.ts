import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product, ProductCart } from '../types/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<ProductCart[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  getCartItems(): ProductCart[] {
    return this.cartItemsSubject.value;
  }

  addToCart(product: Product) {
    const currentCartItems = this.getCartItems();
    const existingItem = currentCartItems.find(
      (item) => item.id === product.id
    );
    const quantity = existingItem ? existingItem.quantity + 1 : 1;
    const updatedProduct = { ...product, quantity };
    if (existingItem) {
      const updatedCartItems = currentCartItems.map((item) =>
        item === existingItem ? updatedProduct : item
      );
      this.cartItemsSubject.next(updatedCartItems);
      return;
    }
    const updatedCartItems = [...currentCartItems, updatedProduct];
    this.cartItemsSubject.next(updatedCartItems);
  }

  removeFromCart(product: Product) {
    const currentCartItems = this.getCartItems();
    const existingItem = currentCartItems.find(
      (item) => item.id === product.id
    );
    if (existingItem.quantity > 1) {
      const quantity = existingItem.quantity - 1;
      const updatedProduct = { ...product, quantity };

      const updatedCartItems = currentCartItems.filter(
        (item) => item.id !== updatedProduct.id
      );
      updatedCartItems.push(updatedProduct);
      this.cartItemsSubject.next(updatedCartItems);
      return;
    }

    const updatedCartItems = currentCartItems.filter(
      (item) => item !== product
    );
    this.cartItemsSubject.next(updatedCartItems);
  }
}
