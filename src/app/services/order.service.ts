import { Injectable } from '@angular/core';
import { Order } from '../types/order.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];
  private ordersSubject = new BehaviorSubject<Order[]>(this.orders);

  constructor() { 
    this.createInitialOrders();
  }

  private createInitialOrders() {
    for (let i = 1; i <= 5; i++) {
        const order: Order = {
          id: i,
          product: [{
            id: i,
            name: `Product ${i}`,
            price: i * 100,
            image: `assets/images/product-${i}.jpg`,
            description: `Description for Product ${i}`,
            rating: 5,
            category: 'Some category',
            brand: 'Some brand'
          }],
          amount: i * 100,
          refunded: false
        };
        this.orders.push(order);
      }
  }

  private updateOrders() { 
    this.ordersSubject.next([...this.orders]);
  }  

  refundOrder(orderId: number, cause: string): Order[] {
    const order = this.orders.find(o => o.id === orderId);
    const updatedRefunded = { ...order, refunded: true, refundCause: cause };
    if (order) {
      const updatedOrders = this.orders.map(o => o === order ? updatedRefunded : o);
      this.orders = updatedOrders;
    }
    return this.orders;
  }

  getOrders(): Order[] {
    return this.orders;
  }

  generateCSV(): string {
    let csvContent = 'id,amount,refunded\n';
    this.orders.forEach(order => {
      csvContent += `${order.id},${order.product},${order.amount},${order.refunded}\n`;
    });
    return csvContent;
  }
}