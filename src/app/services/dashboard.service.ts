import { Injectable } from '@angular/core';
import { Observable, of, catchError } from 'rxjs';
import { ApiService } from './api.service';
import { Order, OrderStatus } from '../models/order.model';
import { DashboardStats } from '../models/stats.model';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(private apiService: ApiService) { }

    getDashboardStats(): Observable<DashboardStats> {
        return this.apiService.get<DashboardStats>('stats').pipe(
            catchError(() => {
                // Fallback to mock data if API fails (for demo purposes) or returning empty
                console.warn('Failed to fetch stats, using fallback');
                return of(this.getMockStats());
            })
        );
    }

    getAllOrders(): Observable<Order[]> {
        return this.apiService.get<Order[]>('orders');
    }

    getPendingOrders(): Observable<Order[]> {
        return this.apiService.get<Order[]>('orders/pending');
    }

    getDeliverySchedule(): Observable<Order[]> {
        return this.apiService.get<Order[]>('orders/delivery');
    }

    acceptOrder(orderId: string): Observable<boolean> {
        return this.apiService.post<boolean>(`orders/${orderId}/accept`, {});
    }

    rejectOrder(orderId: string): Observable<boolean> {
        return this.apiService.post<boolean>(`orders/${orderId}/reject`, {});
    }

    createFishLot(lotData: any): Observable<any> {
        return this.apiService.post('fish-lots', lotData);
    }

    viewOrderDetails(orderId: string): void {
        console.log('Viewing order details:', orderId);
        // Navigate to details page or open modal
    }

    private getMockStats(): DashboardStats {
        return {
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
    }
}
