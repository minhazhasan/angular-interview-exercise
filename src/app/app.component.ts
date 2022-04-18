import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightsService } from './shared/services/flights.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    
  }

}
