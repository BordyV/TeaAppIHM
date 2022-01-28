import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Stock } from 'src/app/models/stock.model';

@Component({
  selector: 'app-table-stock',
  templateUrl: './table-stock.component.html',
  styleUrls: ['./table-stock.component.scss']
})

export class TableStockComponent implements OnInit, OnChanges, AfterViewInit {
  //props in
  @Input() stocks: Stock[] = [];

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['quantity', 'location', 'dateExp'];
  dataSource: MatTableDataSource<Stock> = new MatTableDataSource();
  constructor() {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  public ngOnChanges(changes: SimpleChanges) {
    if ('stocks' in changes) {
      this.dataSource = new MatTableDataSource(this.stocks);
      this.dataSource.sort = this.sort;
    }
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.stocks);
    this.dataSource.sort = this.sort;
  }

}
