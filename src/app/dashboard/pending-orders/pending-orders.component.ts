import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from '../order-card/order-card.component';
import { Order } from '../../models/order.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-pending-orders',
  imports: [CommonModule, OrderCardComponent],
  templateUrl: './pending-orders.component.html',
  styleUrl: './pending-orders.component.css'
})
export class PendingOrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getPendingOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

  onAcceptOrder(orderId: string): void {
    this.dashboardService.acceptOrder(orderId).subscribe(() => {
      this.orders = this.orders.filter(order => order.id !== orderId);
    });
  }

  onRejectOrder(orderId: string): void {
    this.dashboardService.rejectOrder(orderId).subscribe(() => {
      this.orders = this.orders.filter(order => order.id !== orderId);
    });
  }
}
