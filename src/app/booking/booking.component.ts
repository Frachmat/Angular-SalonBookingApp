import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  selectedDate: string = '';
  isBooked: boolean = false;

  bookAppointment() {
    this.isBooked = true;
    console.log(this.selectedDate)
  }
}