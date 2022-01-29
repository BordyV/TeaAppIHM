import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Log } from '../models/log.model';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private urlLog: String = 'log/';

  constructor(private http: HttpClient) { }

  getLogs(): Observable<Log[]> {
    return this.http.get<Log[]>(environment.apiUrl + this.urlLog);
  }
}