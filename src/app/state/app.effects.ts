import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { getProdotti } from './app.actions';
import * as AppActions from './app.actions';
import { exhaustMap, map, of } from 'rxjs';
import { Product } from '../types/product.model';
import { products } from '../data';
import { DataService } from '../services/data.service';

@Injectable()
export class AppEffects {
  prodotti: Product[] = products;
  getProdottiEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[prodotti] get all'),
      exhaustMap(() =>
        of(this.prodotti).pipe(
          map((prodotti) => AppActions.getProdottiSuccess({ prodotti }))
        )
      )
    )
  );
  constructor(private actions$: Actions) {}
}
