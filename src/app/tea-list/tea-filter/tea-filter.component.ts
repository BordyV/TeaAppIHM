import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tea-filter',
  templateUrl: './tea-filter.component.html',
  styleUrls: ['./tea-filter.component.scss']
})
export class TeaFilterComponent implements OnInit {
  @Output() filterEvent = new EventEmitter<string>();
  filterValue: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  filterTea() {
    this.filterEvent.emit(this.filterValue);
  }
}
