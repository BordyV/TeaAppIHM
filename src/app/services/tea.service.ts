import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stock } from '../models/stock.model';
import { Tea } from '../models/tea.model';
import { bdInitialTeas } from '../shared/mock/mock_data_initDB';

@Injectable({
  providedIn: 'root'
})
export class TeaService {

  private urlTea: String = 'tea/';
  public teaList: Tea[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getTeas(): Observable<Tea[]> {
    return this.http.get<Tea[]>(environment.apiUrl + this.urlTea);
  }

  addTea(tea: Tea): Observable<any> {
    return this.http.post<Tea>(environment.apiUrl + this.urlTea, tea);
  }

  getReferenceName(): string[] {
    let referenceName: string[] = [];
    if (this.teaList.length > 0) {
      referenceName = this.teaList.map((tea: Tea) => {
        return tea.reference + " | " + tea.name;
      });
    }
    return referenceName;
  }

  initBdMockData(): Observable<any> {

    const BufferForAddAssignment: any = [];
    //pour chaque thé de notre fichier
    bdInitialTeas.forEach((tea) => {
      const newTea = new Tea();
      newTea.stocks = [];
      //pour chaque stock de notre thé 
      tea.stocks.forEach((stock) => {
        const newStock = new Stock();
        newStock.dateExp = new Date(stock.dateExp);
        newStock.location = stock.location;
        newStock.quantity = Number(stock.quantity);
        newTea.stocks?.push(newStock);
      });

      newTea._id = tea._id;
      newTea.name = tea.name;
      newTea.reference = Number(tea.reference);

      BufferForAddAssignment.push(this.addTea(newTea));
    });
    return forkJoin(BufferForAddAssignment); // renvoie un seul Observable pour dire que c'est fini    
  }
}
