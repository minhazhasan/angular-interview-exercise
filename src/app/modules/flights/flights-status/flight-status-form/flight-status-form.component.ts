import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightStatusFormModel } from 'src/app/models/flightsStatusFormModel';

@Component({
  selector: 'app-flight-status-form',
  templateUrl: './flight-status-form.component.html',
  styleUrls: ['./flight-status-form.component.scss']
})
export class FlightStatusFormComponent implements OnInit {

  @Input() flightStatusObj: FlightStatusFormModel;
  @Output() onFlightStatusFormSubmit = new EventEmitter<FlightStatusFormModel>();

  flightStatusForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initialteFormGroup();
  }

  initialteFormGroup() {
    this.flightStatusForm = this.fb.group({
      origin: ['', {
        validators: [Validators.required, Validators.maxLength(3)],
        updateOn: 'blur'
      }],
      destination: ['', {
        validators: [Validators.required, Validators.maxLength(3)],
        updateOn: 'blur'
      }],
      date: ['', {
        Validators: [Validators.required]
      }]
    });
  }

  get origin(): FormControl {
    return this.flightStatusForm.get("origin") as FormControl;
  }

  get destination(): FormControl {
    return this.flightStatusForm.get("destination") as FormControl;
  }

  get date(): FormControl {
    return this.flightStatusForm.get("date") as FormControl;
  }

  onCheckFlights(form: FormGroup) {
    this.onFlightStatusFormSubmit.emit(form.value as FlightStatusFormModel);
  }

}
