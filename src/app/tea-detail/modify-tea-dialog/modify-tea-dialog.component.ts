import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Stock } from 'src/app/models/stock.model';
import { Tea } from 'src/app/models/tea.model';
import { TeaDetailComponent } from '../tea-detail.component';

@Component({
  selector: 'app-modify-tea-dialog',
  templateUrl: './modify-tea-dialog.component.html',
  styleUrls: ['./modify-tea-dialog.component.scss']
})
export class ModifyTeaDialogComponent implements OnInit {

  teaTemp: Tea = new Tea;
  displayedColumns: string[] = ['delete', 'quantity', 'location', 'dateExp'];
  dataSource: MatTableDataSource<Stock> = new MatTableDataSource();
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialogRef: MatDialogRef<TeaDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tea) { }

  ngOnInit(): void {
    this.teaTemp = JSON.parse(JSON.stringify(this.data));
    this.dataSource = new MatTableDataSource(this.teaTemp.stocks);
    this.dataSource.sort = this.sort;
  }
  deleteStock(stock: Stock) {
    this.teaTemp.stocks!.splice(this.teaTemp.stocks!.indexOf(stock), 1);
    this.dataSource = new MatTableDataSource(this.teaTemp.stocks);
    this.dataSource.sort = this.sort;
  }
}
