import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: any;

  constructor(
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
    this.getUser();
  }

  public getToken(): string {
    return localStorage.getItem('access_token') || '';
  }

  public getUser(): void {
    const user = localStorage.getItem('access_token') || '';
    this.currentUser = this.jwtHelper.decodeToken(user);
  }

  public login(username: string, password: string) {
    const body = new HttpParams()
      .set('client_id', 'neon-web')
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    return this.httpClient.post<any>(environment.api + '/auth', body).pipe(
        map((res: any) => {
          if (res && res.access_token) {
            localStorage.setItem('access_token', res.access_token);
            this.currentUser = this.jwtHelper.decodeToken(res.access_token);
          }
          return res;
        })
      );
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    this.currentUser = null;
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
}
