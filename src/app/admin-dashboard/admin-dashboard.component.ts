import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  private router = inject(Router); 


  logout(): void {
    this.router.navigate(['/login']);
  }

   // Method to navigate to admin-view-booking page
   viewBookings(): void {
    this.router.navigate(['/admin-view-bookings']);
  }


  
}
