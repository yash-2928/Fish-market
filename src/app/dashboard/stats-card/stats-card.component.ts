import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-card',
  imports: [CommonModule],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.css'
})
export class StatsCardComponent {
  @Input() title: string = '';
  @Input() value: string | number = '';
  @Input() change: number = 0;
  @Input() icon: string = '';
  @Input() iconColor: string = '#4169E1';

  getAbsoluteChange(): number {
    return Math.abs(this.change);
  }
}
