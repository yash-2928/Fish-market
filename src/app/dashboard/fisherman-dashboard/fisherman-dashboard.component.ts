import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';
import { StatsCardComponent } from '../stats-card/stats-card.component';
import { AllOrdersComponent } from '../all-orders/all-orders.component';
import { PendingOrdersComponent } from '../pending-orders/pending-orders.component';
import { DeliveryScheduleComponent } from '../delivery-schedule/delivery-schedule.component';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardStats } from '../../models/stats.model';
import { AddFishLotModalComponent } from '../add-fish-lot-modal/add-fish-lot-modal.component';

@Component({
  selector: 'app-fisherman-dashboard',
  imports: [
    CommonModule,
    DashboardHeaderComponent,
    StatsCardComponent,
    AllOrdersComponent,
    PendingOrdersComponent,
    DeliveryScheduleComponent,
    AddFishLotModalComponent
  ],
  templateUrl: './fisherman-dashboard.component.html',
  styleUrl: './fisherman-dashboard.component.css'
})
export class FishermanDashboardComponent implements OnInit {
  stats: DashboardStats | null = null;
  isAddLotModalOpen = false;

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
    this.isAddLotModalOpen = true;
  }

  onCloseAddLotModal(): void {
    this.isAddLotModalOpen = false;
  }

  onAddLot(data: any): void {
    console.log('New lot data:', data);
    this.dashboardService.createFishLot(data).subscribe({
      next: (response) => {
        console.log('Lot created successfully', response);
        this.isAddLotModalOpen = false;
        // Optionally refresh stats or list
      },
      error: (error) => {
        console.error('Error creating lot', error);
        alert('Failed to create lot');
      }
    });
  }
}
