import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../../../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: any;

  constructor(
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  public login(username: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set('client_id', 'neon-web')
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    return this.httpClient.post<any>(environment.api + '/auth', body).pipe(
        map((res: any) => {
          if (res && res.token) {
            this.currentUser = this.jwtHelper.decodeToken(res.token);
          }
          return res;
        })
      );
  }
}
