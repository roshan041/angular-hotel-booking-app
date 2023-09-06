import { Component ,OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { BookingService } from '../booking/booking.service';
import { Booking } from '../models/booking';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  bookingForm : FormGroup = new FormGroup({});

  constructor(
    private formBuilder : FormBuilder,
    private bookingService: BookingService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ){}

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      checkInDate:["",Validators.required],
      checkOutDate:["",Validators.required],
      guestName:["",Validators.required],
      guestEmail:["",[Validators.required, Validators.email]],
      roomNumber:["",Validators.required]
    });

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id){
      let booking = this.bookingService.getBooking(id);

      if(booking){
        this.bookingForm.patchValue(booking);
      }
    }
  }


  onSubmit(){
    if(this.bookingForm.valid){
      console.log("valid");

      let booking : Booking= this.bookingForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if(id){
        this.bookingService.updateBooking(id, booking);
      }else{
        this.bookingService.addBooking(booking);
      }
      this.router.navigate(['/list']);
    }
  }
}
