import { Component , OnInit} from '@angular/core';
import { Booking } from '../models/booking';
import { BookingService } from '../booking/booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit{
  bookings : Booking []=[];

  // angular dependency injection injects bookingService into this component
  constructor(private bookingService: BookingService){
  }

  ngOnInit(): void {
    //this.bookings = this.bookingService.getBookings();
    this.bookingService.getBookings().subscribe(bookings=>{
      this.bookings = bookings;
    });

  }

  deleteBooking(id: string){
  //this.bookingService.deleteBooking(id);

  this.bookingService.deleteBooking(id).subscribe(()=>{
    console.log('deleted');
  });
  }

}
