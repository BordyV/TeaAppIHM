import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tea } from '../models/tea.model';

@Injectable({
  providedIn: 'root'
})
export class TeaService {

  private urlTea: String = 'tea/';

  constructor(
    private http:HttpClient
  ) { }

    getTeas():Observable<Tea[]> {
    return this.http.get<Tea[]>(environment.apiUrl + this.urlTea);
  }
}
