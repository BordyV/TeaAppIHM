import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isloggedIn: boolean;
  jwt: string = "";
  private userName: string = "";
  private urlUser: String = 'user/';

  constructor(private http: HttpClient
  ) {
    this.isloggedIn = false;
  }

  login(username: string, password: string): Observable<any> {
    let body = {
      userEmail: username,
      userPassword: password
    }
    return this.http.post<any>(environment.apiUrl + this.urlUser + "connection", body);
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  isAdminUser(): boolean {
    if (this.userName == 'Admin') {
      return true;
    }
    return false;
  }

  logoutUser(): void {
    this.isloggedIn = false;
    this.jwt = "";
  }
}
