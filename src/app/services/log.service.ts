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

  getLogsPagine(page:number, limit:number):Observable<any> {
    return this.http.get<any>(environment.apiUrl + this.urlLog +`pagination?page=${page}&limit=${limit}`);
  }

  getLogsByidOperationDocument(_idOperationDocument: string): Observable<Log[]> {
    return this.http.get<Log[]>(environment.apiUrl + this.urlLog + _idOperationDocument);
  }

  updateLog(log: Log): Observable<any> {
    return this.http.put<any>(environment.apiUrl + this.urlLog, log);
  }
}
