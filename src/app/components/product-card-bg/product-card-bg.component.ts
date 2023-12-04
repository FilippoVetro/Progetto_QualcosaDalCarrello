import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/types/product.model';
import { ProductDetailModulComponent } from '../product-detail-modul/product-detail-modul.component';
import { HttpClient } from '@angular/common/http';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-product-card-bg',
  templateUrl: './product-card-bg.component.html',
  styleUrls: ['./product-card-bg.component.css'],
})
export class ProductCardBgComponent implements OnInit {
  @Input() product: Product;
  @Input() isCartItem: boolean = false;

  constructor(
    private dialog: MatDialog,
    private cartService: CartService,
    private http: HttpClient,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {}

  openModal(product: any) {
    const dialogRef = this.dialog.open(ProductDetailModulComponent, {
      data: product,
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.cartService.addToCart(result);
      }
    });
  }

  addToCart(product: Product) {
    // this.cartService.addToCart(product);

    this.firebaseService.insertItemToCart(product);
  }

  insertItemToCart(url: string, body: {}) {
    return this.http.post(url, body).subscribe((data) => {
      console.log(data);
    });
  }
  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }
}
