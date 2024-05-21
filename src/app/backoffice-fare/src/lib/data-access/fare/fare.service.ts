import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class FareService {
  httpOptions: any;

  constructor(
    private httpClient: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  public getFares(): Observable<any> {
    return this.httpClient.get<any>(environment.api + '/backoffice/fares', this.httpOptions);
  }

  public getFare(id: string): Observable<any> {
    return this.httpClient.get<any>(environment.api + `/backoffice/fares/${id}`, this.httpOptions);
  }

  public saveFare(fare: any): Observable<any> {
    return this.httpClient.post<any>(environment.api + '/backoffice/fares', fare, this.httpOptions);
  }

  public updateFare(fare: any): Observable<any> {
    return this.httpClient.put<any>(environment.api + '/backoffice/fares', fare, this.httpOptions);
  }

  public deleteFare(id: string): Observable<any> {
    return this.httpClient.delete<any>(environment.api + '/backoffice/fares' + id, this.httpOptions);
  }
}
