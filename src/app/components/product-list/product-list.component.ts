import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  sizeCard = 'lg';
  isGrid = false;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [
    'All',
    'Desktop',
    'Laptop',
    'Software',
    'Hardware',
    'Tablet',
    'Accessories',
  ];
  selectedCategory = 'All';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.handleRouteParameters();
      this.filterProducts(); // Move the filtering here
    });
  }

  private handleRouteParameters() {
    const categoryParam = this.route.snapshot.paramMap.get('category');
    if (categoryParam) {
      this.selectCategory(categoryParam);
    } else {
      this.filteredProducts = this.products;
    }
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.filterProducts();
  }

  changeView() {
    this.isGrid = !this.isGrid;
  }

  private filterProducts() {
    if (this.selectedCategory.toLowerCase() === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        (product) =>
          product.category.toLowerCase() === this.selectedCategory.toLowerCase()
      );
    }
  }
}
