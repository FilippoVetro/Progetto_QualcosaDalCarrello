import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SupportComponent } from './components/support/support.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { canMatch } from './guards/can-match.guard';
import { DashboardManagerComponent } from './components/dashboard-manager/dashboard-manager.component';
import { canDeactivateGuard } from './guards/can-deactivate.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // {
  //   path: 'dashboard',
  //   canMatch: [() => canMatch(['ADMIN'])],
  //   loadComponent: () => DashboardAdminComponent,
  // },
  // {
  //   path: 'dashboard',
  //   canMatch: [() => canMatch(['MANAGER'])],
  //   loadComponent: () => DashboardManagerComponent,
  // },
  // {
  //   path: 'dashboard',
  //   loadComponent: () => DashboardEveryOneComponent,
  // },
  { path: 'shop', component: ShopPageComponent },
  { path: 'dashboard', component: DashboardManagerComponent },
  { path: 'shop/:category', component: ShopPageComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'contacts', component: ContactsComponent },
  {
    path: 'orders',
    component: OrdersComponent,
    // canDeactivate: [canDeactivateGuard],
  },
  {
    path: 'support',
    component: SupportComponent,
  },
  { path: 'cart', component: CartComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
