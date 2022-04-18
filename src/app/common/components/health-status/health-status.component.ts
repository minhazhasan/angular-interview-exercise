import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FlightsService } from 'src/app/shared/services/flights.service';

@Component({
  selector: 'app-health-status',
  templateUrl: './health-status.component.html',
  styleUrls: ['./health-status.component.scss']
})
export class HealthStatusComponent implements OnInit {

  healthPing: Observable<string>;
  constructor(private flightService: FlightsService) { }

  ngOnInit(): void {
    this.healthPing = this.flightService.getHealthPing();
  }

}
