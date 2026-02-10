import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard-header',
  imports: [CommonModule],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.css'
})
export class DashboardHeaderComponent implements OnInit {
  @Output() industrialViewClick = new EventEmitter<void>();
  @Output() addNewLotClick = new EventEmitter<void>();

  user: any = null;
  showDropdown = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  onIndustrialViewClick(): void {
    this.industrialViewClick.emit();
  }

  onAddNewLotClick(): void {
    this.addNewLotClick.emit();
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  logout(): void {
    this.authService.logout();
  }
}
