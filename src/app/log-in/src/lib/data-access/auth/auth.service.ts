import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { environment } from '../../../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public login(username: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set('client_id', 'neon-web')
      .set('username', username)
      .set('password', 'admin')
      .set('grant_type', password);

    return this.httpClient.post<any>(environment.login + '/realms/neon/protocol/openid-connect/token', body).pipe(
        map((res: any) => {
          // if (res && res.token) {
          //   this.currentUser = this.jwtHelper.decodeToken(res.token);
          // }
          return res;
        })
      );
  }
}
