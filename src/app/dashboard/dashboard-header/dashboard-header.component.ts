import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  imports: [],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.css'
})
export class DashboardHeaderComponent {
  @Output() industrialViewClick = new EventEmitter<void>();
  @Output() addNewLotClick = new EventEmitter<void>();

  onIndustrialViewClick(): void {
    this.industrialViewClick.emit();
  }

  onAddNewLotClick(): void {
    this.addNewLotClick.emit();
  }
}
