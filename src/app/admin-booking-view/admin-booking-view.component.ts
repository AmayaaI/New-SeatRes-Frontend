/*import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { MatDateFormats, MAT_DATE_FORMATS } from '@angular/material/core'
interface Booking {
  seatNumber: number;
  employeeId: string;
  employeeName: string;
  bookingDate: string;
}







@Component({
  selector: 'app-admin-booking-view',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  templateUrl: './admin-booking-view.component.html',
  styleUrls: ['./admin-booking-view.component.css']
})
export class AdminBookingViewComponent implements OnInit {
  bookingForm: FormGroup;
  bookings: Booking[] = [];

  private apiUrl = 'your-api-endpoint'; // Replace with your actual API endpoint
  private cancelApiUrl = 'your-api-cancel-endpoint';
  

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      selectedDate: [''] // Form control for selectedDate
    });
  }

  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings(): void {
    this.http.get<Booking[]>(this.apiUrl).subscribe(
      data => {
        this.bookings = data;
      },
      error => {
        console.error('Error fetching bookings:', error);
      }
    );
  }

  onDateChange(event: any): void {
    const selectedDate = event.value; // Make sure you're accessing the correct property here
    if (selectedDate) {
      this.http.get<Booking[]>(`${this.apiUrl}?date=${selectedDate}`).subscribe(
        data => {
          this.bookings = data;
        },
        error => {
          console.error('Error fetching bookings:', error);
        }
      );
    } else {
      this.fetchBookings();
    }
  }
  

  cancelBooking(booking: Booking): void {
    const confirmation = confirm(`Are you sure you want to cancel the booking for seat ${booking.seatNumber}?`);
    if (confirmation) {
      // Adjust the URL and request method as needed
      this.http.post(`${this.cancelApiUrl}`, { seatNumber: booking.seatNumber }).subscribe(
        () => {
          this.bookings = this.bookings.filter(b => b !== booking);
          alert(`Booking for seat ${booking.seatNumber} has been canceled.`);
        },
        error => {
          console.error('Error canceling booking:', error);
          alert('An error occurred while canceling the booking.');
        }
      );
    }
  }

  //onSubmit(): void {
    // You can use this method to submit the form data if needed
   // const formData = this.bookingForm.value;
   // console.log('Form submitted with data:', formData);
    // Send formData to your backend or handle it accordingly
  //}
}*/

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

interface Booking {
  seatNumber: number;
  employeeId: string;
  employeeName: string;
  bookingDate: string;
}

@Component({
  selector: 'app-admin-booking-view',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  templateUrl: './admin-booking-view.component.html',
  styleUrls: ['./admin-booking-view.component.css']
})
export class AdminBookingViewComponent implements OnInit {
  bookingForm: FormGroup;
  bookings: Booking[] = [];

  private apiUrl = 'your-api-endpoint'; // Replace with your actual API endpoint
  private cancelApiUrl = 'your-api-cancel-endpoint';

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      selectedDate: [''] // Form control for selectedDate
    });
  }

  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings(): void {
    this.http.get<Booking[]>(this.apiUrl).subscribe(
      data => {
        this.bookings = data;
      },
      error => {
        console.error('Error fetching bookings:', error);
      }
    );
  }

  onDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const selectedDate = input.value; // Access the value from the input
    if (selectedDate) {
      this.http.get<Booking[]>(`${this.apiUrl}?date=${selectedDate}`).subscribe(
        data => {
          this.bookings = data;
        },
        error => {
          console.error('Error fetching bookings:', error);
        }
      );
    } else {
      this.fetchBookings();
    }
  }

  cancelBooking(booking: Booking): void {
    const confirmation = confirm(`Are you sure you want to cancel the booking for seat ${booking.seatNumber}?`);
    if (confirmation) {
      // Adjust the URL and request method as needed
      this.http.post(`${this.cancelApiUrl}`, { seatNumber: booking.seatNumber }).subscribe(
        () => {
          this.bookings = this.bookings.filter(b => b !== booking);
          alert(`Booking for seat ${booking.seatNumber} has been canceled.`);
        },
        error => {
          console.error('Error canceling booking:', error);
          alert('An error occurred while canceling the booking.');
        }
      );
    }
  }
}

