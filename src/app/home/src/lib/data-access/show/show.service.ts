import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
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

  public getShowsByMovie(id: string): Observable<any> {
    return this.httpClient.get<any>(environment.api + `/shows/${id}`, this.httpOptions);
  }

}
