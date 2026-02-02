import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from '../order-card/order-card.component';
import { Order } from '../../models/order.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-all-orders',
  imports: [CommonModule, OrderCardComponent],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.css'
})
export class AllOrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getAllOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

  onViewDetails(orderId: string): void {
    this.dashboardService.viewOrderDetails(orderId);
  }
}
