import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailModulComponent } from '../product-detail-modul/product-detail-modul.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  isGrid: boolean = true;
  products: Product[];
  filteredProducts: Product[];
  isCategory: boolean;
  categories: string[] = [
    'All',
    'Desktop',
    'Laptop',
    'Software',
    'Hardware',
    'Tablet',
    'Accessories',
  ];
  selectedCategory: string = 'All';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    if (this.route.snapshot.paramMap.get('id')) {
      this.isCategory = true;
      this.selectCategory(this.route.snapshot.paramMap.get('category')!);
    } else {
      this.isCategory = false;
      this.filteredProducts = this.products;
    }
  }

  openModal(product: any) {
    const dialogRef =this.dialog.open(ProductDetailModulComponent, {  
      data: product, 
      width: '500px' });

      dialogRef.afterClosed().subscribe(result => {
        if(result) {
          this.cartService.addToCart(result);
        }
      });  
  }

  private getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.filterProducts();
    });
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterProducts();
  }

  changeView() {
    this.isGrid = !this.isGrid;
  }

  private filterProducts() {
    if (this.selectedCategory === 'All') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        (product) => product.category === this.selectedCategory
      );
    }
  }
}
