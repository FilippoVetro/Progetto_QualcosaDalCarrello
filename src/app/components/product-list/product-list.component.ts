import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  filteredProducts: Product[];
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

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
    this.selectCategory('All');
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
