import { createAction, props } from '@ngrx/store';
import { Product } from '../types/product.model';

export const getProdotti = createAction('[prodotti] get all');
export const getProdottiSuccess = createAction(
  '[prodotti] get all success',
  props<{ prodotti: Product[] }>()
);
