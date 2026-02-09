import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard-header',
  imports: [],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.css'
})
export class DashboardHeaderComponent {
  @Output() industrialViewClick = new EventEmitter<void>();
  @Output() addNewLotClick = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  onIndustrialViewClick(): void {
    this.industrialViewClick.emit();
  }

  onAddNewLotClick(): void {
    this.addNewLotClick.emit();
  }

  logout(): void {
    this.authService.logout();
  }
}
