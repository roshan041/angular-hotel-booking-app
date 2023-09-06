import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookings : Booking[]= [];
  constructor() {
    let savedBookings  = localStorage.getItem('bookings');

    this.bookings = savedBookings ? JSON.parse(savedBookings): [];
  }

  getBookings(): Booking[]{
    return this.bookings;
  }

  getBooking(id: string): Booking | undefined {
    return this.bookings.find(res=> res.id == id);
  }

  addBooking(booking : Booking) : void{

    booking.id= Date.now().toString();

    this.bookings.push(booking);
    console.log("booking added", this.bookings);

    localStorage.setItem('bookings',JSON.stringify(this.bookings));
  }

  deleteBooking(id : string) : void{
    let index = this.bookings.findIndex(res => res.id == id);
    this.bookings.splice(index,1);

    localStorage.setItem('bookings',JSON.stringify(this.bookings));

  }

  updateBooking(id: string, booking : Booking) : void{
    let index = this.bookings.findIndex(res => res.id == id);
    this.bookings[index]=booking;

    localStorage.setItem('bookings',JSON.stringify(this.bookings));

  }
}
