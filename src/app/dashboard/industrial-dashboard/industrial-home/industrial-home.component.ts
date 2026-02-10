import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-industrial-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './industrial-home.component.html',
    styleUrl: './industrial-home.component.css' // Updated styleUrl
})
export class IndustrialHomeComponent implements OnInit {

    stats = [
        {
            label: 'Total Orders',
            value: '47',
            subtext: '12 this month',
            trend: '+18%',
            trendUp: true,
            iconType: 'orders',
            colorClass: 'blue'
        },
        {
            label: 'Active Deliveries',
            value: '5',
            subtext: '2 arriving today',
            trend: 'On track',
            trendUp: true,
            iconType: 'truck',
            colorClass: 'green'
        },
        {
            label: 'Total Amount Spent',
            value: '$24,680',
            subtext: '$8,450 this month',
            trend: '+5.2%',
            trendUp: true,
            iconType: 'dollar',
            colorClass: 'purple'
        },
        {
            label: 'Pending Payments',
            value: '$3,120',
            subtext: '3 invoices due',
            trend: 'Due soon',
            trendUp: false,
            iconType: 'clock',
            colorClass: 'orange'
        }
    ];

    recentOrders = [
        {
            id: 'ORD-1047',
            items: 'Atlantic Salmon • 25 kg',
            price: '$212.50',
            paymentStatus: 'Paid',
            deliveryStatus: 'Delivered'
        },
        {
            id: 'ORD-1046',
            items: 'Yellowfin Tuna • 10 kg',
            price: '$120.00',
            paymentStatus: 'Partial',
            deliveryStatus: 'In Transit'
        },
        {
            id: 'ORD-1045',
            items: 'Tiger Prawns • 8 kg',
            price: '$176.00',
            paymentStatus: 'Pending',
            deliveryStatus: 'Assigned'
        },
        {
            id: 'ORD-1044',
            items: 'Sea Bass Fillets • 15 kg',
            price: '$236.25',
            paymentStatus: 'Paid',
            deliveryStatus: 'Delivered'
        }
    ];

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    navigateToOrders(): void {
        this.router.navigate(['/industrial/orders']);
    }

    navigateToCatalog(): void {
        this.router.navigate(['/industrial/catalog']);
    }

    getPaymentStatusClass(status: string): string {
        switch (status.toLowerCase()) {
            case 'paid': return 'badge-success';
            case 'partial': return 'badge-warning';
            case 'pending': return 'badge-danger';
            default: return 'badge-secondary';
        }
    }

    getDeliveryStatusClass(status: string): string {
        switch (status.toLowerCase()) {
            case 'delivered': return 'badge-success';
            case 'in transit': return 'badge-info';
            case 'assigned': return 'badge-secondary';
            default: return 'badge-secondary';
        }
    }
}
