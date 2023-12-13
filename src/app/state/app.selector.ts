import { AppState } from './app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const appStateSelector = createFeatureSelector<AppState>('app');
export const prodottiSelector = createSelector(
  appStateSelector,
  (state) => state.prodotti
);
