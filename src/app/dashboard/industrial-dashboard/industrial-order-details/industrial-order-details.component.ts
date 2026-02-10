import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-industrial-order-details',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './industrial-order-details.component.html',
    styleUrl: './industrial-order-details.component.css'
})
export class IndustrialOrderDetailsComponent implements OnInit {

    orderId: string | null = null;

    order = {
        id: 'ORD-1046',
        date: '2024-01-07',
        status: 'Partial',
        fishType: 'Yellowfin Tuna',
        quality: 'A',
        weight: '10 kg',
        catchDate: '2024-01-06',
        location: 'Pacific Ocean',
        fisherman: {
            name: 'Maria Santos',
            phone: '+1 (555) 222-3344',
            location: 'Coastal Port, Dock 5',
            rating: 4.7
        },
        tracking: {
            step: 2, // 1: Assigned, 2: In Transit, 3: Delivered
            driver: 'Maria L.',
            driverPhone: '+1 (555) 567-8901',
            eta: '25 mins'
        },
        pricing: {
            fishPrice: 100.00,
            deliveryCharge: 8.00,
            platformFee: 4.00,
            total: 120.00
        },
        payment: {
            advancePaid: 60.00,
            remaining: 60.00,
            status: 'Partial'
        }
    };

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.orderId = params.get('id');
            // In a real app, fetch order details by ID
        });
    }

    goBack(): void {
        this.router.navigate(['/industrial/orders']);
    }

    payRemaining(): void {
        console.log('Paying remaining amount:', this.order.payment.remaining);
        // Logic to process payment
    }
}
