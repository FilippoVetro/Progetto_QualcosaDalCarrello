import { createAction, props } from '@ngrx/store';
import { Prodotto } from './app.state';

export const getProdotti = createAction('[prodotti] get all');
export const getProdottiSuccess = createAction(
  '[prodotti] get all success',
  props<{ prodotti: Prodotto[] }>()
);
