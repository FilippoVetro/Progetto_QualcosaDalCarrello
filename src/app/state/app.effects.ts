import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AppActions from './app.actions';
import { exhaustMap, map, catchError, switchMap } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import { Product } from '../types/product.model';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  getProdottiEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.getProdotti),
      exhaustMap(() =>
        this.productService.getProducts().pipe(
          map((prodotti) => AppActions.getProdottiSuccess({ prodotti })),
          catchError((error) => of(AppActions.getProdottiFailure({ error })))
        )
      )
    )
  );

  filterProductsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.filterProducts),
      switchMap((action) =>
        this.productService.getProducts().pipe(
          map((allProducts) => {
            const filteredProducts = this.filterProducts(
              allProducts,
              action.filterCriteria
            );
            return AppActions.filterProductsSuccess({ filteredProducts });
          }),
          catchError((error) => of(AppActions.filterProductsFailure({ error })))
        )
      )
    )
  );

  private filterProducts(
    allProducts: Product[],
    filterCriteria: string
  ): Product[] {
    // Implement your filtering logic here
    if (filterCriteria.toLowerCase() === 'all') {
      return allProducts;
    } else {
      return allProducts.filter(
        (product) =>
          product.category.toLowerCase() === filterCriteria.toLowerCase()
      );
    }
  }
}
