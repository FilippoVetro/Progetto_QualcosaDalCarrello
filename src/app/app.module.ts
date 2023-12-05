import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductCardBgComponent } from './components/product-card-bg/product-card-bg.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SupportComponent } from './components/support/support.component';
import { ProductCardSmComponent } from './components/product-card-sm/product-card-sm.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RefundCauseComponent } from './components/refund-cause/refund-cause.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    ProductCardBgComponent,
    ProductCardSmComponent,
    HomeComponent,
    ShopPageComponent,
    ContactsComponent,
    OrdersComponent,
    SupportComponent,
    CartComponent,
    RefundCauseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSnackBarModule,
  
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
