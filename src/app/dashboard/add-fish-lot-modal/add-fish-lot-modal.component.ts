import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-fish-lot-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-fish-lot-modal.component.html',
  styleUrls: ['./add-fish-lot-modal.component.css']
})
export class AddFishLotModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() addLot = new EventEmitter<any>();

  lotForm: FormGroup;

  fishTypes = ['Salmon', 'Tuna', 'Cod', 'Haddock', 'Mackerel']; // Example data
  qualityGrades = ['A', 'B', 'C', 'Premium']; // Example data

  constructor(private fb: FormBuilder) {
    this.lotForm = this.fb.group({
      fishType: ['', Validators.required],
      qualityGrade: ['', Validators.required],
      weight: ['', Validators.required],
      price: ['', Validators.required],
      catchDate: [''],
      catchLocation: [''],
      notes: ['']
    });
  }

  onClose(): void {
    this.close.emit();
  }

  onSubmit(): void {
    if (this.lotForm.valid) {
      this.addLot.emit(this.lotForm.value);
      this.close.emit();
    } else {
        this.lotForm.markAllAsTouched();
    }
  }
}
