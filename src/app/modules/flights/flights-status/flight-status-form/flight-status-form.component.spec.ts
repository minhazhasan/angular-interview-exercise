import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FlightStatusFormModel } from 'src/app/models/flightsStatusFormModel';
import { FlightsModule } from '../../flights.module';

import { FlightStatusFormComponent } from './flight-status-form.component';

describe('FlightStatusFormComponent', () => {
  let component: FlightStatusFormComponent;
  let fixture: ComponentFixture<FlightStatusFormComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FlightsModule],
      declarations: [ FlightStatusFormComponent ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(FlightStatusFormComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      fixture.detectChanges();
    });
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be valid if form is valid', () => {
    component.flightStatusForm.setValue({
      "origin": "SEA",
      "destination": "FAT",
      "date": "07/12/2021"
    });

    
    expect(component.flightStatusForm.valid).toBeTrue();
  });

  it('emits flightStatusFormSubmit event when entering origin, destination and date', fakeAsync(() => {
    
    spyOn(component.onFlightStatusFormSubmit, 'emit');

    let flightStatus: FlightStatusFormModel;
    const originEl = el.query(By.css('[name="origin"]')).nativeElement;
    console.log(originEl);
    const destinationEl = el.query(By.css('[name="destination"]')).nativeElement;
    const dateEl = el.query(By.css('[name="date"]')).nativeElement;
    const submitEl = el.query(By.css('[type=submit]'));

    originEl.value = "SEA";
    destinationEl.value = "FAT";
    dateEl.value = "09/12/2021";

    

    expect(originEl.value).toEqual("SEA");
    originEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    flush();
    
    submitEl.nativeElement.click();
    component.onFlightStatusFormSubmit.subscribe((val) => {
      flightStatus = val;
    });

    expect(component.onFlightStatusFormSubmit.emit).toHaveBeenCalled();
    //expect(component.onFlightStatusFormSubmit.emit).toHaveBeenCalledWith(flightStatus);


  }));
});
