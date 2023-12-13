import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProdotti } from '../../state/app.actions';
import { AppState } from '../../state/app.state';
import { prodottiSelector } from '../../state/app.selector';
import { map, Observable, tap } from 'rxjs';
import { Product } from 'src/app/types/product.model';

@Component({
  // standalone: true,

  selector: 'app-dashboard-manager',
  templateUrl: './dashboard-manager.component.html',
  styleUrls: ['./dashboard-manager.component.css'],
})
export class DashboardManagerComponent implements OnInit {
  constructor(private store: Store<AppState>) {
    this.prodotti$ = this.store.select(prodottiSelector);
  }

  prodotti$: Observable<Product[]>;
  ngOnInit() {
    this.store.dispatch(getProdotti());
  }
}
