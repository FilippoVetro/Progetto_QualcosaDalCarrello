import { AppState } from './app.state';
import { ActionReducer, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';

const initialState: AppState = {
  prodotti: [],
  filteredProdotti: [], // Add a property for filtered products
};

export const appReducers: ActionReducer<AppState> = createReducer(
  initialState,

  on(AppActions.getProdottiSuccess, (state: AppState, { prodotti }) => ({
    ...state,
    prodotti: [...prodotti],
    filteredProdotti: [...prodotti], // Initialize filteredProdotti with all products
  })),

  on(
    AppActions.filterProductsSuccess,
    (state: AppState, { filteredProducts }) => ({
      ...state,
      filteredProdotti: [...filteredProducts],
    })
  )
);
