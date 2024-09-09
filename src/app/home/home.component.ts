import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {} 

  viewBookings(): void {
    this.router.navigate(['/login']);
  }
}
