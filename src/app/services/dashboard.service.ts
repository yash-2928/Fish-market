import { Injectable } from '@angular/core';
import { Observable, of, catchError, map } from 'rxjs';
import { ApiService } from './api.service';
import { Order, OrderStatus } from '../models/order.model';
import { DashboardStats, StatsApiResponse } from '../models/stats.model';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(private apiService: ApiService) { }

    getDashboardStats(): Observable<DashboardStats> {
        return this.apiService.get<StatsApiResponse>('stats').pipe(
            map(raw => this.mapStatsResponse(raw)),
            catchError(() => {
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
    }

    private mapStatsResponse(raw: StatsApiResponse): DashboardStats {
        return {
            completedOrders: {
                title: 'Completed Orders',
                value: raw.completedOrders,
                change: raw.completedOrdersChange,
                icon: '✓',
                iconColor: '#10B981'
            },
            profit: {
                title: 'Profit',
                value: `₹${raw.profit.toLocaleString()}`,
                change: raw.profitChange,
                icon: '📈',
                iconColor: '#3B82F6'
            },
            revenue: {
                title: 'Revenue',
                value: `₹${raw.revenue.toLocaleString()}`,
                change: raw.revenueChange,
                icon: '💰',
                iconColor: '#8B5CF6'
            },
            totalWeight: {
                title: 'Total Weight Delivered',
                value: `${raw.totalWeight.toLocaleString()} kg`,
                change: raw.totalWeightChange,
                icon: '⚖️',
                iconColor: '#F59E0B'
            }
        };
    }

    private getMockStats(): DashboardStats {
        return this.mapStatsResponse({
            completedOrders: 127,
            completedOrdersChange: 15,
            profit: 24580,
            profitChange: 8,
            revenue: 89340,
            revenueChange: 12,
            totalWeight: 2845,
            totalWeightChange: 20
        });
    }
}
