import { Injectable } from '@angular/core';
import { Order } from '../types/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];

  constructor() { 
    this.createInitialOrders();
  }

  private createInitialOrders() {
    for (let i = 1; i <= 5; i++) {
        const order: Order = {
          id: i,
          amount: i * 100,
          refunded: false
        };
        this.orders.push(order);
      }
  }

  refundOrder(orderId: number, cause: string): Order[] {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.refunded = true;
      order.refundCause = cause;
    }
    return this.orders;
  }

  getOrders(): Order[] {
    return this.orders;
  }

  generateCSV(): string {
    let csvContent = 'id,amount,refunded\n';
    this.orders.forEach(order => {
      csvContent += `${order.id},${order.amount},${order.refunded}\n`;
    });
    return csvContent;
  }
}