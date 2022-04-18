import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsStatusResultsComponent } from './flights-status-results.component';

xdescribe('FlightsStatusResultsComponent', () => {
  let component: FlightsStatusResultsComponent;
  let fixture: ComponentFixture<FlightsStatusResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsStatusResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsStatusResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
