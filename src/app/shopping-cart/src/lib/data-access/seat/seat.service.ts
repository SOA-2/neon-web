import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SeatService {
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

  public getSeatsByScreenId(id: string): Observable<any> {
    return this.httpClient.get<any>(environment.api + `/seats/screen/${id}`, this.httpOptions);
  }

  public getSeatsReservedByShowId(id: string): Observable<any> {
    return this.httpClient.get<any>(environment.api + `/reserved/${id}`, this.httpOptions);
  }

  public getSeatsReserved(id: string): Observable<any> {
    return this.httpClient.get<any>(environment.api + `/reserved/seats/${id}`, this.httpOptions);
  }
}
