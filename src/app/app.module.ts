import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './components/cart/cart.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SupportComponent } from './components/support/support.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [AppComponent,ProductListComponent, NavbarComponent, 
    ContactsComponent, OrdersComponent, SupportComponent, 
    CartComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    BrowserAnimationsModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}




