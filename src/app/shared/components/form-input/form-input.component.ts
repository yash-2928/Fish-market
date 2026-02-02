import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="input-container" [formGroup]="formGroup">
      <label [for]="controlName">{{ label }} <span *ngIf="required" class="required">*</span></label>
      <div class="input-wrapper" [class.error]="isInvalid()">
        <input
          [id]="controlName"
          [type]="type"
          [formControlName]="controlName"
          [placeholder]="placeholder"
          class="custom-input"
        />
      </div>
      <div class="error-text" *ngIf="isInvalid()">
        {{ getErrorMessage() }}
      </div>
    </div>
  `,
  styles: [`
    .input-container {
      margin-bottom: 1rem;
      width: 100%;
    }

    label {
      display: block;
      margin-bottom: 0.4rem;
      font-size: 0.85rem;
      font-weight: 600;
      color: #374151;
    }

    .required {
      color: #ef4444;
    }

    .input-wrapper {
      display: flex;
      align-items: center;
      background: #ffffff;
      border: 1.5px solid #d1d5db;
      border-radius: 6px;
      transition: all 0.2s;
    }

    .input-wrapper:focus-within {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }

    .input-wrapper.error {
      border-color: #ef4444;
    }

    .custom-input {
      flex: 1;
      background: transparent;
      border: none;
      padding: 10px 12px;
      color: #111827;
      font-size: 0.95rem;
      outline: none;
      width: 100%;
    }

    .custom-input::placeholder {
      color: #9ca3af;
    }

    .error-text {
      color: #ef4444;
      font-size: 0.75rem;
      margin-top: 0.25rem;
    }
  `]
})
export class FormInputComponent {
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() icon?: string; // Icon kept in input but not used for simplicity as requested
  @Input() required: boolean = false;

  isInvalid(): boolean {
    const control = this.formGroup.get(this.controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  getErrorMessage(): string {
    const control = this.formGroup.get(this.controlName);
    if (control?.hasError('required')) {
      return `${this.label} is required`;
    }
    if (control?.hasError('email')) {
      return 'Invalid email address';
    }
    if (control?.hasError('minlength')) {
      return `${this.label} is too short`;
    }
    if (control?.hasError('pattern')) {
      return `Invalid ${this.label} format`;
    }
    return '';
  }
}
