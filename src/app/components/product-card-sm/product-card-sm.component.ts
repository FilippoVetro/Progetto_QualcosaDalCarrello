import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/types/product.model';
import { ProductDetailModulComponent } from '../product-detail-modul/product-detail-modul.component';

@Component({
  selector: 'app-product-card-sm',
  templateUrl: './product-card-sm.component.html',
  styleUrls: ['./product-card-sm.component.css'],
})
export class ProductCardSmComponent implements OnInit {
  @Input() product: Product;
  @Input() sizeCard: string;

  constructor(private dialog: MatDialog, private cartService: CartService) {}

  ngOnInit(): void {
    console.log(this.sizeCard);
  }

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
    this.cartService.addToCart(product);
  }
}
