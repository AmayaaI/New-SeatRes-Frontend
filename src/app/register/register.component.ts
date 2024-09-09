import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  standalone: true, 
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule] 
})
export class RegisterComponent {
  registerForm: FormGroup;
  private apiUrl = 'https://localhost:7109/api/Employee/register';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router,private snackBar: MatSnackBar) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phoneNumber: ['']
    });
  }

 /* onSubmit(): void {
    if (this.registerForm.valid) {
      this.http.post(this.apiUrl, this.registerForm.value)
        .subscribe(
          response => {
            console.log('Employee registered successfully', response);
            alert('Registration successful!');
            this.router.navigate(['/login']); 
            
          },
          error => {
            console.error('Error registering employee', error);
            alert('Registration failed. Please try again.');
          }
        );
    }
  }*/
    onSubmit(): void {
      if (this.registerForm.valid) {
        this.http.post(this.apiUrl, this.registerForm.value).subscribe(
          response => {
            console.log('Employee registered successfully', response);
            this.snackBar.open('Registration successful!', 'Close', {
              duration: 3000,
              panelClass: ['snack-bar-success']
            });
            this.router.navigate(['/login']); 
          },
          error => {
            console.error('Error registering employee', error);
            this.snackBar.open('Registration failed. Please try again.', 'Close', {
              duration: 3000,
              panelClass: ['snack-bar-error']
            });
          }
        );
      } else {
        this.snackBar.open('Please fill out all required fields.', 'Close', {
          duration: 3000,
          panelClass: ['snack-bar-warning']
        });
      }
    }
    
}
