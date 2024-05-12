import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { environment } from '../../../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
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

  public getMovies(): Observable<any> {
    return this.httpClient.get<any>(environment.api + '/movies', this.httpOptions);
  }
}
