import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {Action} from "@ngrx/store";
import {getProdotti} from "./app.actions";
import * as AppActions from "./app.actions";
import {exhaustMap, map, of} from "rxjs";
import {Prodotto} from "./app.state";



@Injectable()
export class AppEffects {
  prodotti : Prodotto[] = [{id:'0',nome:'Bicchiere', prezzo:"2,50"}, {id:'1',nome:'Forchetta', prezzo:"1,50"}];

  getProdottiEffect$ = createEffect(() => this.actions$.pipe(
    ofType('[prodotti] get all'),
    exhaustMap(() => of(this.prodotti).pipe(
      map((prodotti)=> (AppActions.getProdottiSuccess({prodotti})))
    ))
  ))
  constructor(private actions$ : Actions) {
  }
}
