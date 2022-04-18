import { TestBed } from '@angular/core/testing';

import { FlightsService } from './flights.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ErrorResponseModel } from 'src/app/models/ErrorResponseModel';
import { HttpErrorResponse } from '@angular/common/http';

describe('FlightsService', () => {
  let service: FlightsService,
      httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlightsService]
    });
    service = TestBed.inject(FlightsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should throw an error when accessing health ping endpoint', () => {

    service.getHealthPing().subscribe(
      () => fail('Unautorized access'),
      (err: HttpErrorResponse) => {
        expect(err.status).toBe(401)
      }
    );

    const req = httpTestingController.expectOne('https://apis.qa.alaskaair.com/aag/1/guestServices/flights/ping');
    expect(req.request.method).toEqual("GET");
    req.flush('failed health ping check', { status: 401, statusText: "Unauthorized access"});
  });

  afterEach(() => {
    httpTestingController.verify();
  })
});
