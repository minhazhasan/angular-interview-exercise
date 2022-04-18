import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsStatusComponent } from './flights-status/flights-status.component';
import { FlightsRoutingModule } from './flights-routing.module';
import { FlightStatusFormComponent } from './flights-status/flight-status-form/flight-status-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightsStatusResultsComponent } from './flights-status/flights-status-results/flights-status-results.component';



@NgModule({
  declarations: [
    FlightsStatusComponent,
    FlightStatusFormComponent,
    FlightsStatusResultsComponent
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FlightsModule { }
