import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-order-card',
  imports: [CommonModule],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css'
})
export class OrderCardComponent {
  @Input() order!: Order;
  @Input() showActions: boolean = false;
  @Input() showDeliveryInfo: boolean = false;
  @Output() viewDetails = new EventEmitter<string>();
  @Output() accept = new EventEmitter<string>();
  @Output() reject = new EventEmitter<string>();

  onViewDetails(): void {
    this.viewDetails.emit(this.order.id);
  }

  onAccept(): void {
    this.accept.emit(this.order.id);
  }

  onReject(): void {
    this.reject.emit(this.order.id);
  }

  getStatusClass(): string {
    return `status-${this.order.status}`;
  }

  getStatusLabel(): string {
    return this.order.status.charAt(0).toUpperCase() + this.order.status.slice(1);
  }
}
