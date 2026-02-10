import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-industrial-header',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './industrial-header.component.html',
    styleUrl: './industrial-header.component.css'
})
export class IndustrialHeaderComponent implements OnInit {
    user: any = null;
    showDropdown = false;
    cartItemCount = 3; // Mocked for now

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.user = this.authService.getUser();
    }

    toggleDropdown(): void {
        this.showDropdown = !this.showDropdown;
    }

    logout(): void {
        this.authService.logout();
    }

    navigateToFishermanView(): void {
        this.router.navigate(['/dashboard']);
    }
}
