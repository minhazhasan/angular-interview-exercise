import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsStatusComponent } from './flights-status.component';

xdescribe('FlightsStatusComponent', () => {
  let component: FlightsStatusComponent;
  let fixture: ComponentFixture<FlightsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
