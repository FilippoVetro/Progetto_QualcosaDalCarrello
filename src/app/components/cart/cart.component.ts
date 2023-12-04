import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailModulComponent } from '../product-detail-modul/product-detail-modul.component';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/types/product.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Product[];
  persone: any;

  constructor(
    private dialog: MatDialog,
    private cartService: CartService,
    private firebaseService: FirebaseService
  ) {}

  // ngOnInit(): void {
  //   this.cartItems = this.cartService.getCartItems();
  // }

  // ngOnInit(): void {
  //   this.firebaseService.getCart().subscribe((data: any) => {
  //     this.cartItems = Object.keys(data).map((key) => {
  //       data[key]['id'] = key; // aggiungo una proprietà chiamata 'id' alla quale assegno il valore originale
  //       return data[key];
  //     });
  //   });
  // }
  ngOnInit(): void {
    this.firebaseService.getPersone().subscribe((data: any) => {
      this.persone = Object.keys(data).map((key) => {
        data[key]['id'] = key; // aggiungo una proprietà chiamata 'id' alla quale assegno il valore originale
        return data[key];
      });
      console.log(this.persone);
    });
  }
}
