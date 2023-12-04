import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-product-detail-modul',
  templateUrl: './product-detail-modul.component.html',
  styleUrls: ['./product-detail-modul.component.css']
})
export class ProductDetailModulComponent {
constructor(
    public dialogRef: MatDialogRef<ProductDetailModulComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


 addToCart(): void {
    this.dialogRef.close(this.data);
  }

  close(): void {
    this.dialogRef.close();
  }
}