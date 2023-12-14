import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filterProducts } from 'src/app/state/app.actions';
import { filteredProdottiSelector } from 'src/app/state/app.selector';
import { AppState } from 'src/app/state/app.state';
import { Product } from 'src/app/types/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  searchTerm: string = '';
  sizeCard = 'lg';
  isGrid = false;
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
  @Output('select') selection: EventEmitter<Product> =
    new EventEmitter<Product>();
  filteredProducts$ = this.store.select(filteredProdottiSelector);

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.store.dispatch(filterProducts({ filterCriteria: 'All' }));
  }

  // TODO
  private handleRouteParameters() {
    const categoryParam = this.route.snapshot.paramMap.get('category');
    if (categoryParam) {
      this.selectCategory(categoryParam);
    } else {
      this.selectCategory('All');
    }
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.store.dispatch(
      filterProducts({ filterCriteria: this.selectedCategory })
    );
  }

  changeView() {
    this.isGrid = !this.isGrid;
  }

  selectProduct(product: Product) {
    console.log('Product selected:', product);
    this.selection.emit(product);
  }
}
