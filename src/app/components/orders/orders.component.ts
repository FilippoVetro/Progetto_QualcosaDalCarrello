import { Component, OnInit } from '@angular/core';
import { Order } from '../../types/order.model';
import { OrderService } from '../../services/order.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  orders: Order[] = [];
  refundCause: string;
  @ViewChild('refundModal') refundModal: TemplateRef<any>;

  constructor( private dialog: MatDialog, private orderService: OrderService) {}
  
  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

  openRefundOrder(order: Order) {
    const dialogRef = this.dialog.open(this.refundModal, {
      data: { order}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'refund') {
        this.refundOrder();
        
      }
    });
    
  }

  refundOrder() {
    // this.orderService.refundOrder(orderId, this.refundCause);
    // this.orders = this.orderService.getOrders();
    this.dialog.closeAll();
  }

  generateCSV(order: Order) {
    const orderDetails = `Order ID: ${order.id}\nOrder Amount: ${order.amount}\nRefunded: ${order.refunded ? 'Yes' : 'No'}`;
  console.log(orderDetails);
    
  }

  dismissRefundModal() {
    this.dialog.closeAll();
  }

}
