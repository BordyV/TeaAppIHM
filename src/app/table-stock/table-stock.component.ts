import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Stock } from 'src/app/models/stock.model';

@Component({
  selector: 'app-table-stock',
  templateUrl: './table-stock.component.html',
  styleUrls: ['./table-stock.component.scss']
})

export class TableStockComponent implements OnInit, OnChanges {
  //props in
  @Input() stocks: Stock[] = [];

  displayedColumns: string[] = ['quantity', 'location', 'dateExp'];
  dataSource: MatTableDataSource<Stock> = new MatTableDataSource();
  constructor() {
  }

  public ngOnChanges(changes: SimpleChanges) {
    if ('stocks' in changes) {
      this.dataSource = new MatTableDataSource(this.stocks);
    }
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.stocks);
  }

}
