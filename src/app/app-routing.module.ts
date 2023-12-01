import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SupportComponent } from './components/support/support.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'navbar', component: NavbarComponent},
  { path: 'contacts', component: ContactsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'support', component: SupportComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
