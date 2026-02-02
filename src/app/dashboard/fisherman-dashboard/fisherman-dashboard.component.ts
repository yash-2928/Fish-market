import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';
import { StatsCardComponent } from '../stats-card/stats-card.component';
import { AllOrdersComponent } from '../all-orders/all-orders.component';
import { PendingOrdersComponent } from '../pending-orders/pending-orders.component';
import { DeliveryScheduleComponent } from '../delivery-schedule/delivery-schedule.component';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardStats } from '../../models/stats.model';

@Component({
  selector: 'app-fisherman-dashboard',
  imports: [
    CommonModule,
    DashboardHeaderComponent,
    StatsCardComponent,
    AllOrdersComponent,
    PendingOrdersComponent,
    DeliveryScheduleComponent
  ],
  templateUrl: './fisherman-dashboard.component.html',
  styleUrl: './fisherman-dashboard.component.css'
})
export class FishermanDashboardComponent implements OnInit {
  stats: DashboardStats | null = null;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getDashboardStats().subscribe(stats => {
      this.stats = stats;
    });
  }

  onIndustrialViewClick(): void {
    console.log('Industrial View clicked');
    // Implement navigation or modal logic
  }

  onAddNewLotClick(): void {
    console.log('Add New Lot clicked');
    // Implement navigation or modal logic
  }
}
