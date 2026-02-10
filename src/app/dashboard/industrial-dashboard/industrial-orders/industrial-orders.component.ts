import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-industrial-orders',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './industrial-orders.component.html',
    styleUrl: './industrial-orders.component.css' // Updated styleUrl
})
export class IndustrialOrdersComponent implements OnInit {

    searchTerm = '';

    orders = [
        {
            id: 'ORD-1047',
            fishType: 'Atlantic Salmon',
            quantity: '25 kg',
            totalPrice: '$212.50',
            payment: 'Paid',
            delivery: 'Delivered'
        },
        {
            id: 'ORD-1046',
            fishType: 'Yellowfin Tuna',
            quantity: '10 kg',
            totalPrice: '$120.00',
            payment: 'Partial',
            delivery: 'In Transit'
        },
        {
            id: 'ORD-1045',
            fishType: 'Tiger Prawns',
            quantity: '8 kg',
            totalPrice: '$176.00',
            payment: 'Pending',
            delivery: 'Assigned'
        },
        {
            id: 'ORD-1044',
            fishType: 'Sea Bass Fillets',
            quantity: '15 kg',
            totalPrice: '$236.25',
            payment: 'Paid',
            delivery: 'Delivered'
        },
        {
            id: 'ORD-1043',
            fishType: 'Cod',
            quantity: '20 kg',
            totalPrice: '$180.00',
            payment: 'Paid',
            delivery: 'Delivered'
        },
        {
            id: 'ORD-1042',
            fishType: 'Mackerel',
            quantity: '12 kg',
            totalPrice: '$78.00',
            payment: 'Pending',
            delivery: 'Preparing'
        },
        {
            id: 'ORD-1041',
            fishType: 'Prawns',
            quantity: '5 kg',
            totalPrice: '$110.00',
            payment: 'Paid',
            delivery: 'Delivered'
        }
    ];

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    viewOrderDetails(orderId: string): void {
        // In a real app we'd route to details, but for now we'll just log
        console.log('View details for', orderId);
        // this.router.navigate(['/industrial/order', orderId]); 
    }

    getPaymentClass(status: string): string {
        switch (status.toLowerCase()) {
            case 'paid': return 'badge-success';
            case 'partial': return 'badge-warning';
            case 'pending': return 'badge-danger';
            default: return 'badge-secondary';
        }
    }

    getDeliveryClass(status: string): string {
        switch (status.toLowerCase()) {
            case 'delivered': return 'badge-success';
            case 'in transit': return 'badge-info';
            case 'assigned': return 'badge-secondary';
            case 'preparing': return 'badge-warning';
            default: return 'badge-secondary';
        }
    }
}
