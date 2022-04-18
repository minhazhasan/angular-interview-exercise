import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErrorResponseModel } from 'src/app/models/ErrorResponseModel';


@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private healthEndpoint: string = 'https://apis.qa.alaskaair.com/aag/1/guestServices/flights/ping';
  private flightsEndpoint: string = 'https://apis.qa.alaskaair.com/aag/1/guestServices/flights/?fromDate=2021-07-25&toDate=2021-07-25&origin=SEA&destination=LAX&nonStopOnly=false';

  constructor(private http: HttpClient) { }

  public getHealthPing(): Observable<string> {
    const options = {
      headers: new HttpHeaders({
        'Ocp-Apim-Subscription-Key': environment.apiKey
      }),
    };

    return this.http.get<string>(this.healthEndpoint, options).pipe(
      catchError((err) => {
        console.log(`Error Status: ${err.statusCode}, (${err.message})`);
        return throwError(err);
      }),
      map((result: string) => {
        return result;
      })
    );
  }

  
  public get healthEndpointUrl() : string {
    return this.healthEndpointUrl;
  }
  

}
