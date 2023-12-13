import { AppState } from './app.state';
import { ActionReducer, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';

const initialState: AppState = {
  prodotti: [],
};

export const appReducers: ActionReducer<AppState> = createReducer(
  initialState,

  on(AppActions.getProdottiSuccess, (state: AppState, { prodotti }) => ({
    ...state,
    prodotti: [...prodotti],
  }))
);
