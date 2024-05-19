import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reserve: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  public preReserve(form: any): void {
    this.reserve = form;
  }

  public getPreReserve(): any {
    return this.reserve;
  }

  public reserveShow(form: any): Observable<any> {
    return this.httpClient.post<any>(environment.api + '/reserve', form).pipe(
        map((res: any) => {
          this.reserve = {};
        })
      );
  }
}
