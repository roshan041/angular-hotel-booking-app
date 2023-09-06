import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingListComponent } from './booking-list/booking-list.component';

const routes: Routes = [
  {path:"", component : HomeComponent},
  {path:"list", component : BookingListComponent},
  {path:"new", component : BookingFormComponent},
  {path:"edit/:id", component : BookingFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
