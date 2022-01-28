import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
import * as moment from "moment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userName: string = "";
  private urlUser: String = 'user/';

  constructor(private http: HttpClient
  ) {
  }

  login(username: string, password: string): Observable<any> {
    let body = {
      userEmail: username,
      userPassword: password
    }
    return this.http.post<any>(environment.apiUrl + this.urlUser + "connection", body);
  }

  inscription(userPseudo: string, userEmail: string, password: string): Observable<any> {
    let body = {
      userPseudo: userPseudo,
      userEmail: userEmail,
      userPassword: password
    }
    return this.http.post<any>(environment.apiUrl + this.urlUser + "addUser", body);
  }

  isUserLoggedIn(): boolean {
    if (localStorage.getItem('id_token') && localStorage.getItem('expire_at')) {
      return this.isExpirationValid();
    }
    return false;
  }

  isAdminUser(): boolean {
    if (this.userName == 'Admin') {
      return true;
    }
    return false;
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
  setSessionJWT(jwt: string) {
    const tokenInfo = this.getDecodedAccessToken(jwt); // decode token
    const expireDate = tokenInfo.exp; // get token expiration dateTime
    localStorage.setItem('id_token', jwt);
    localStorage.setItem('expire_at', JSON.stringify(expireDate.valueOf()));
  }

  isExpirationValid() {
    const expiration = localStorage.getItem('expire_at');

    const expiresAt = JSON.parse(expiration!);
    return moment().isBefore(moment(expiresAt * 1000));
  }

  logoutUser(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expire_at');
  }
}
