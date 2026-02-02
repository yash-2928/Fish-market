import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from '../order-card/order-card.component';
import { Order } from '../../models/order.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-delivery-schedule',
  imports: [CommonModule, OrderCardComponent],
  templateUrl: './delivery-schedule.component.html',
  styleUrl: './delivery-schedule.component.css'
})
export class DeliveryScheduleComponent implements OnInit {
  deliveries: Order[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getDeliverySchedule().subscribe(deliveries => {
      this.deliveries = deliveries;
    });
  }

  onViewDetails(orderId: string): void {
    this.dashboardService.viewOrderDetails(orderId);
  }
}
