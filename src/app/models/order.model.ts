export enum OrderStatus {
    COMPLETED = 'completed',
    PENDING = 'pending',
    PROCESSING = 'processing',
    HIGH = 'high',
    MEDIUM = 'medium',
    SCHEDULED = 'scheduled',
    REJECTED = 'rejected'
}

export interface Order {
    id: string;
    customer?: string;
    location?: string;
    weight: number;
    weightUnit: string;
    price?: number;
    status: OrderStatus;
    timestamp?: string;
    timeAgo?: string;
    deliveryTime?: string;
    driver?: string;
}
