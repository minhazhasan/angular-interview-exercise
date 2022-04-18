import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightStatusFormModel } from 'src/app/models/flightsStatusFormModel';

@Component({
  selector: 'app-flights-status',
  templateUrl: './flights-status.component.html',
  styleUrls: ['./flights-status.component.scss']
})
export class FlightsStatusComponent implements OnInit {

  flightStatus: FlightStatusFormModel;
  flightResults$: Observable<any>;

  constructor() { }

  ngOnInit(): void {
  }

  getFlightStatus(data: FlightStatusFormModel) {
    console.log(data);
  }

}
