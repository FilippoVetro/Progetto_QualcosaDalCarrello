import {AppState} from "./app.state";
import {ActionReducer, createReducer, on} from "@ngrx/store";
import * as AppActions from "./app.actions";


const initialState : AppState = {
  prodotti : []
}

export const appReducers: ActionReducer<AppState> = createReducer(
  initialState,
  // on(AppActions.getProdotti, (state) : AppState =>
  //   ({ ...state,
  //     prodotti : [
  //       {id:'0',nome:'Bicchiere', prezzo:"2,50"},
  //       {id:'1',nome:'Forchetta', prezzo:"1,50"}]
  //   })),
    on(AppActions.getProdottiSuccess, (state :AppState, {prodotti}) => ({...state, prodotti : [...prodotti]}))
  )
