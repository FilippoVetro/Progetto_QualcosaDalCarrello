import { Component, OnInit } from '@angular/core';
import { Order } from '../../types/order.model';
import { OrderService } from '../../services/order.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  selectedOrder: Order;
  refundCause: string;
  @ViewChild('refundModal') refundModal: TemplateRef<any>;

  constructor(private dialog: MatDialog, private orderService: OrderService) {}

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

  openRefundOrder(order: Order) {
    console.log(order);
    this.selectedOrder = order;

    const dialogRef = this.dialog.open(this.refundModal, {
      data: { order },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'refund') {
      }
    });
  }

  refundOrder() {
    this.orderService.refundOrder(this.selectedOrder.id, this.refundCause);
    this.orders = this.orderService.getOrders();
    this.dialog.closeAll();
  }

  generateCSV(order: Order) {
    const orderDetails = `Order ID: ${order.id}\nOrder Product: ${
      order.product
    }\nOrder Amount: ${order.amount}\nRefunded: ${
      order.refunded ? 'Yes' : 'No'
    }`;
    const csv = `${orderDetails}\n\n`;
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('hidden', '');
    link.setAttribute('href', url);
    link.setAttribute('download', `order-${order.id}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  dismissRefundModal() {
    this.dialog.closeAll();
  }
}
