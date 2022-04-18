import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flights-status-results',
  templateUrl: './flights-status-results.component.html',
  styleUrls: ['./flights-status-results.component.scss']
})
export class FlightsStatusResultsComponent implements OnInit {

  @Input() flightSttausResults$: Observable<any>
  constructor() { }

  ngOnInit(): void {
  }

}
