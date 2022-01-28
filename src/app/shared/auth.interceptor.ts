import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  // Permet d'intercepter les requetes http et de rajouter le token
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('id_token');

    if (!token) {
      return next.handle(request);
    }
    const request1 = request.clone({
      headers: request.headers.set('x-auth-token', token),
    });

    return next.handle(request1);
  }
}
