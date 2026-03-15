export interface DashboardStats {
    completedOrders: StatItem;
    profit: StatItem;
    revenue: StatItem;
    totalWeight: StatItem;
}

export interface StatItem {
    title: string;
    value: string | number;
    change: number;
    icon: string;
    iconColor: string;
}

// Raw response from GET /api/stats — backend only sends values
export interface StatsApiResponse {
    completedOrders: number;
    completedOrdersChange: number;
    profit: number;
    profitChange: number;
    revenue: number;
    revenueChange: number;
    totalWeight: number;
    totalWeightChange: number;
}
