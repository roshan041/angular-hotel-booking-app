import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { BookingListComponent } from '../booking-list/booking-list.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    BookingFormComponent,
    BookingListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeModule
  ]
})
export class BookingModule { }
