import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order, OrderStatus } from '../models/order.model';
import { DashboardStats } from '../models/stats.model';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor() { }

    getDashboardStats(): Observable<DashboardStats> {
        const stats: DashboardStats = {
            completedOrders: {
                title: 'Completed Orders',
                value: 127,
                change: 15,
                icon: '✓',
                iconColor: '#10B981'
            },
            profit: {
                title: 'Profit',
                value: '$24,580',
                change: 8,
                icon: '📈',
                iconColor: '#3B82F6'
            },
            revenue: {
                title: 'Revenue',
                value: '$89,340',
                change: 12,
                icon: '💰',
                iconColor: '#8B5CF6'
            },
            totalWeight: {
                title: 'Total Weight Delivered',
                value: '2,845 kg',
                change: 20,
                icon: '⚖️',
                iconColor: '#F59E0B'
            }
        };
        return of(stats);
    }

    getAllOrders(): Observable<Order[]> {
        const orders: Order[] = [
            {
                id: 'ORD-001',
                customer: 'Ocean Fresh Market',
                weight: 45,
                weightUnit: 'kg',
                price: 540,
                status: OrderStatus.COMPLETED,
                timeAgo: '2 hours ago'
            },
            {
                id: 'ORD-002',
                customer: 'Seaside Restaurant',
                weight: 28,
                weightUnit: 'kg',
                price: 520,
                status: OrderStatus.PROCESSING,
                timeAgo: '4 hours ago'
            },
            {
                id: 'ORD-003',
                customer: 'Fish & Co.',
                weight: 62,
                weightUnit: 'kg',
                price: 465,
                status: OrderStatus.PROCESSING,
                timeAgo: '6 hours ago'
            }
        ];
        return of(orders);
    }

    getPendingOrders(): Observable<Order[]> {
        const orders: Order[] = [
            {
                id: 'ORD-006',
                location: 'Bay Area',
                weight: 38,
                weightUnit: 'kg',
                price: 285,
                status: OrderStatus.HIGH,
                timeAgo: '2 hours ago'
            },
            {
                id: 'ORD-007',
                location: 'Flea Market',
                weight: 52,
                weightUnit: 'kg',
                price: 390,
                status: OrderStatus.MEDIUM,
                timeAgo: '4 hours ago'
            },
            {
                id: 'ORD-008',
                location: 'Harbor Point',
                weight: 41,
                weightUnit: 'kg',
                price: 310,
                status: OrderStatus.MEDIUM,
                timeAgo: '5 hours ago'
            }
        ];
        return of(orders);
    }

    getDeliverySchedule(): Observable<Order[]> {
        const deliveries: Order[] = [
            {
                id: 'DEL-001',
                location: 'Bay View Restaurant',
                weight: 35,
                weightUnit: 'kg',
                driver: 'Driver: John M.',
                status: OrderStatus.SCHEDULED,
                deliveryTime: '10:00 AM'
            },
            {
                id: 'DEL-002',
                location: 'Sunset Cafe',
                weight: 47,
                weightUnit: 'kg',
                driver: 'Driver: Sarah L.',
                status: OrderStatus.PROCESSING,
                deliveryTime: '11:30 AM'
            },
            {
                id: 'DEL-003',
                location: 'Ocean Breeze',
                weight: 29,
                weightUnit: 'kg',
                driver: 'Driver: Mike R.',
                status: OrderStatus.SCHEDULED,
                deliveryTime: '2:00 PM'
            }
        ];
        return of(deliveries);
    }

    acceptOrder(orderId: string): Observable<boolean> {
        console.log('Accepting order:', orderId);
        return of(true);
    }

    rejectOrder(orderId: string): Observable<boolean> {
        console.log('Rejecting order:', orderId);
        return of(true);
    }

    viewOrderDetails(orderId: string): void {
        console.log('Viewing order details:', orderId);
    }
}
