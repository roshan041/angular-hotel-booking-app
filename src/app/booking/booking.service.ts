import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookings : Booking[]= [];
  // constructor() {
  //   let savedBookings  = localStorage.getItem('bookings');

  //   this.bookings = savedBookings ? JSON.parse(savedBookings): [];
  // }

  private apiUrl = "http://localhost:3001";

  constructor(private http : HttpClient){}


  getBookings(): Observable<Booking[]>{
    return this.http.get<Booking[]>(this.apiUrl+'/bookings');
  }

  getBooking(id: string): Observable<Booking> | undefined {
    return this.http.get<Booking>(this.apiUrl+'/booking/'+id);
  }

  deleteBooking(id : string) : Observable<void>{
    return this.http.delete<void>(this.apiUrl+'/booking/'+id);
  }

  addBooking(booking : Booking) : Observable<void>{
    return this.http.post<void>(this.apiUrl+'/booking', booking);
  }

  updateBooking(id: string, booking : Booking) : Observable<void>{
    return this.http.put<void>(this.apiUrl+'/booking/'+id, booking);
  }

  // getBookings(): Booking[]{
  //   return this.bookings;
  // }

  // getBooking(id: string): Booking | undefined {
  //   return this.bookings.find(res=> res.id == id);
  // }

  // addBooking(booking : Booking) : void{

  //   booking.id= Date.now().toString();

  //   this.bookings.push(booking);
  //   console.log("booking added", this.bookings);

  //   localStorage.setItem('bookings',JSON.stringify(this.bookings));
  // }

  // deleteBooking(id : string) : void{
  //   let index = this.bookings.findIndex(res => res.id == id);
  //   this.bookings.splice(index,1);

  //   localStorage.setItem('bookings',JSON.stringify(this.bookings));

  // }

  // updateBooking(id: string, booking : Booking) : void{
  //   let index = this.bookings.findIndex(res => res.id == id);
  //   this.bookings[index]=booking;

  //   localStorage.setItem('bookings',JSON.stringify(this.bookings));

  // }
}
