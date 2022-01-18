import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { connect, Observable, of } from 'rxjs';
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

    this.dataSource.paginator = this.paginator;

  }
  getTeas() {
    this.teaService.getTeas().subscribe((data) => {
      this.setTeasTable(data);
    });
  }
  initTeas() {
    this.teaService.initBdMockData().subscribe(() => {
      console.log('LA BASE EST ENTIEREMENT REMPLIE AVEC LES DONNEES DE TEST');
    });
  }
}
