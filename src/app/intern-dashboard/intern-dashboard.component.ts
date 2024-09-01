import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker'; // Date picker module
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
interface Seat {
  number: number;
  bookings: { [date: string]: boolean }; // Tracks booking status by date
  isAvailable?: boolean;
}

@Component({
  selector: 'app-intern-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDatepickerModule,MatDatepickerModule,
   // MatFormFieldModule,
    //MatInputModule,
    MatNativeDateModule],
  templateUrl: './intern-dashboard.component.html',
  styleUrls: ['./intern-dashboard.component.css']
})
export class InternDashboardComponent {
  
  seats: Seat[] = []; // Initialize empty seat array
  selectedDate: Date | null = null; // Use Date object for selected date
  filteredSeats: Seat[] = []; // Seats filtered by date
  selectedSeat: Seat | null = null; // Currently selected seat for booking
  employeeId: string = '';
  employeeName: string = '';
  showBookingForm: boolean = false; // Control the visibility of the booking form
  isSubmitting: boolean = false; // Add isSubmitting property
  
  constructor() {
    this.seats = Array.from({ length: 20 }, (_, i) => ({
      number: i + 1,
      bookings: {},
      isAvailable: true // Initialize isAvailable as true for all seats
    }));
    this.filteredSeats = [...this.seats];
  }
  

  onDateChange() {
    if (this.selectedDate) {
      const selectedDateStr = new Date(this.selectedDate).toDateString();
      this.filteredSeats = this.seats.filter(seat => !seat.bookings[selectedDateStr]);
    } else {
      this.filteredSeats = [...this.seats]; // If no date selected, show all seats
    }
  }
  
  bookSeat(seat: Seat) {
    this.selectedSeat = seat;
    this.showBookingForm = true; // Show the booking form
  }

  submitBooking() {
    this.isSubmitting = true; // Start the submission process
    console.log('Submit Booking Button Clicked');
  
    if (this.employeeId && this.employeeName && this.selectedSeat && this.selectedDate) {
      const selectedDateStr = new Date(this.selectedDate).toDateString();
  
      // Find the seat being booked
      const seatToBook = this.seats.find(seat => seat.number === this.selectedSeat?.number);
  
      if (seatToBook) {
        // Check if the seat is already booked on the selected date
        if (seatToBook.bookings[selectedDateStr]) {
          alert('The seat is already booked for the selected date.');
          this.isSubmitting = false; // Reset when done
          return;
        }
  
        // Mark the seat as booked on the selected date
        seatToBook.bookings[selectedDateStr] = true;
  
        // Update the filtered seats to reflect the booking immediately
        this.onDateChange();
  
        this.showBookingForm = false; // Hide the booking form
        alert('Booking confirmed successfully!');
      } else {
        alert('Seat not found.');
      }
    } else {
      alert('Please enter both Employee ID and Name, and select a date.');
    }
  
    this.isSubmitting = false; // Reset when done
  }
  
  cancelBooking() {
    this.showBookingForm = false; // Hide the booking form
  }
}
  
  
  
  
 // cancelBooking() {
 //   this.showBookingForm = false; // Hide the booking form
  //}
//}