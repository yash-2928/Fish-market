import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-industrial-catalog',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './industrial-catalog.component.html',
    styleUrl: './industrial-catalog.component.css'
})
export class IndustrialCatalogComponent implements OnInit {

    searchTerm = '';
    showCart = false;

    fishLots = [
        {
            id: 1,
            name: 'Fresh Atlantic Salmon',
            supplier: 'Ocean Fresh Market',
            rating: 4.8,
            description: 'Premium quality Atlantic salmon, fresh caught daily from North Atlantic waters.',
            price: 8.50,
            minOrder: 10,
            inStock: true,
            imagePlaceholder: true // Just a flag to show placeholder div
        },
        {
            id: 2,
            name: 'Yellowfin Tuna',
            supplier: 'Pacific Fisheries',
            rating: 4.9,
            description: 'Sushi-grade yellowfin tuna, flash frozen for maximum freshness.',
            price: 12.00,
            minOrder: 5,
            limited: true, // Shows "Limited" badge
            imagePlaceholder: true
        },
        {
            id: 3,
            name: 'Sea Bass Fillets',
            supplier: 'Coastal Catch Co',
            rating: 4.7,
            description: 'Premium sea bass fillets, boneless and ready to cook.',
            price: 15.75,
            minOrder: 8,
            inStock: true,
            imagePlaceholder: true
        }
        // Add more mock data as needed
    ];

    cartItems = [
        {
            id: 1,
            name: 'Yellowfin Tuna',
            price: 12.00,
            quantity: 9,
            total: 108.00
        },
        {
            id: 2,
            name: 'Sea Bass Fillets',
            price: 15.75,
            quantity: 8,
            total: 126.00
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

    toggleCart(): void {
        this.showCart = !this.showCart;
    }

    addToCart(lot: any): void {
        console.log('Added to cart:', lot.name);
        // Logic to add to cart
        this.showCart = true; // Open cart on add
    }

    calculateSubtotal(): number {
        return this.cartItems.reduce((acc, item) => acc + item.total, 0);
    }

    calculateTotal(): number {
        return this.calculateSubtotal() + 15.00 + 5.85; // Mock delivery + platform fee
    }
}
