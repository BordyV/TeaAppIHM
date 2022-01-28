import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { connect, Observable, of } from 'rxjs';
import { Stock } from '../models/stock.model';
import { Tea } from '../models/tea.model';
import { TeaService } from '../services/tea.service';

@Component({
  selector: 'app-tea-list',
  templateUrl: './tea-list.component.html',
  styleUrls: ['./tea-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TeaListComponent implements OnInit, AfterViewInit {

  @ViewChild('paginator')
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['reference', 'name', 'totalQuantity'];
  dataSource: MatTableDataSource<Tea> = new MatTableDataSource();


  toggleRow(element: { expanded: boolean; }) {
    element.expanded = !element.expanded
  }

  constructor(private teaService: TeaService) { }

  ngOnInit(): void {
    this.getTeas();

  }

  ngAfterViewInit() {
    this.getTeas();

  }
  setTeasTable(data: Tea[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getTeas() {
    this.teaService.getTeas().subscribe((data) => {
      this.teaService.teaList = data;
      console.log(data.length)
      //on ne récupère que les thés qui ont du stock 
      let filteredTea = data.filter((tea: Tea) => {
        return tea.stocks?.length;
      });
      this.setTeasTable(filteredTea);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  totalQuantity(tea: Tea): number {
    let total: number = 0;
    for (let stock of tea.stocks!) {
      total += stock.quantity;
    }
    return total;
  }
}
