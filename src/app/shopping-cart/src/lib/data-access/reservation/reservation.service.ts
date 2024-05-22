import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  httpOptions: any;

  private reserve: any;

  constructor(
    private httpClient: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  public preReserve(form: any): void {
    this.reserve = form;
  }

  public getPreReserve(): any {
    return this.reserve;
  }

  public getReserve(id: string): Observable<any> {
    return this.httpClient.get<any>(environment.api + `/reserve/${id}`, this.httpOptions);
  }

  public getUserReserves(id: string): Observable<any> {
    return this.httpClient.get<any>(environment.api + `/reserve/user/${id}`, this.httpOptions);
  }

  public reserveShow(form: any): Observable<any> {
    return this.httpClient.post<any>(environment.api + '/reserve', form).pipe(
        map((res: any) => {
          this.reserve = {};
          return res;
        })
      );
  }
}
