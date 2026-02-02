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
