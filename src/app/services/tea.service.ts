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
  private urlStock: String = 'stock';
  private urlDeleteStock: String = 'stock/out';
  public teaList: Tea[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getTeas(): Observable<Tea[]> {
    return this.http.get<Tea[]>(environment.apiUrl + this.urlTea);
  }

  getTeaById(id: string): Observable<Tea> {
    return this.http.get<Tea>(environment.apiUrl + this.urlTea + id);
  }

  addTea(tea: Tea): Observable<any> {
    return this.http.post<Tea>(environment.apiUrl + this.urlTea, tea);
  }

  deleteTea(tea: Tea): Observable<any> {
    return this.http.delete<Tea>(environment.apiUrl + this.urlTea + "?_id=" + tea._id);
  }

  deleteAllTeas(): Observable<any> {
    return this.http.delete<any>(environment.apiUrl + this.urlTea + 'all');
  }

  modifyTea(tea: Tea): Observable<any> {
    return this.http.put<Tea>(environment.apiUrl + this.urlTea, tea);
  }

  addStockToTea(stock: Stock, uid: String): Observable<any> {
    return this.http.post<Stock>(environment.apiUrl + this.urlTea + uid + "/" + this.urlStock, stock);
  }

  deleteStockToTea(quantity: number, tea: Tea): Observable<any> {
    let body = JSON.stringify({ quantity: quantity, tea: tea });
    return this.http.put<Stock>(environment.apiUrl + this.urlTea + tea._id + "/" + this.urlDeleteStock, JSON.parse(body));
  }

  getReferenceName(teas: Tea[]): string[] {
    let referenceName: string[] = [];
    if (teas.length > 0) {
      referenceName = teas.map((tea: Tea) => {
        return tea.reference + " | " + tea.name;
      });
    }
    return referenceName;
  }

  setTeasFromList(teas:Tea[]): Observable<any> {
     const BufferForAddTeas: any = [];
    teas.forEach((tea) => {
      BufferForAddTeas.push(this.addTea(tea));
    })
    return forkJoin(BufferForAddTeas);    
  }

  initBdMockData(): Observable<any> {

    const BufferForAddTeas: any = [];
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

      BufferForAddTeas.push(this.addTea(newTea));
    });
    return forkJoin(BufferForAddTeas); // renvoie un seul Observable pour dire que c'est fini    
  }
}
