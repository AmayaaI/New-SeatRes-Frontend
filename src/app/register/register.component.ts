import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private notificationService: NotificationService 
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone_number: ['', Validators.required] 
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      this.userService.register(user).subscribe({
        next: (response) => {
          console.log('User registered', response);
          this.notificationService.showSuccess('Registration successful! Please log in.'); 
          this.router.navigate(['/login']); 
        },
        error: (err: any) => {
          console.error('Registration error', err);
          this.notificationService.showError('Registration failed. Please try again.'); 
        },
      });
    }
  }
}
