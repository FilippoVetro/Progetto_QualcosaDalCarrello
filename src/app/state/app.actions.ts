import { createAction, props } from '@ngrx/store';
import { Product } from '../types/product.model';

export const getProdotti = createAction('[prodotti] get all');
export const getProdottiSuccess = createAction(
  '[prodotti] get all success',
  props<{ prodotti: Product[] }>()
);

export const filterProducts = createAction(
  '[products] filter',
  props<{ filterCriteria: string }>()
);
export const filterProductsSuccess = createAction(
  '[products] filter success',
  props<{ filteredProducts: Product[] }>()
);
export const filterProductsFailure = createAction(
  '[products] filter failure',
  props<{ error: any }>()
);
export function getProdottiFailure(arg0: { error: any }): any {
  throw new Error('Function not implemented.');
}
