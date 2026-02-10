import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FormInputComponent } from '../../shared/components/form-input/form-input.component';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormInputComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.registerForm = this.fb.group({
      // Personal Info
      name: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      role: ['1', [Validators.required]],

      // Location
      location: ['', [Validators.required, Validators.maxLength(100)]],
      address: ['', [Validators.required]],

      // Bank & Identity
      aadhaar_number: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]],
      bank_account_no: ['', [Validators.required, Validators.maxLength(30)]],
      ifsc_code: ['', [Validators.required, Validators.pattern('^[A-Z]{4}0[A-Z0-9]{6}$')]],

      // Account
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  private passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const registrationData = this.registerForm.value;
      console.log('Registering Fisherman:', registrationData);

      this.authService.register(registrationData).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          if (response.isSuccess) {
            this.successMessage = 'Registration successful! Redirecting to login...';
            this.errorMessage = null;
            this.router.navigate(['login']);
          } else {
            this.errorMessage = response.message; 
            this.successMessage = null;
          }
         
        },
        error: (error) => {
          console.error('Registration failed:', error);
          this.errorMessage = 'Registration failed. Please try again.';
          if (error.error && error.error.message) {
            this.errorMessage = error.error.message;
          }
        }
      });
    } else {
      this.errorMessage = 'Please fix the errors in the form before submitting.';
      this.registerForm.markAllAsTouched();
    }
  }
}
