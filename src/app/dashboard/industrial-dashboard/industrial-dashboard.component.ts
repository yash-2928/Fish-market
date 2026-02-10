import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndustrialHeaderComponent } from './industrial-header/industrial-header.component';

@Component({
    selector: 'app-industrial-dashboard',
    standalone: true,
    imports: [RouterOutlet, IndustrialHeaderComponent],
    templateUrl: './industrial-dashboard.component.html',
    styleUrl: './industrial-dashboard.component.css'
})
export class IndustrialDashboardComponent {

}
