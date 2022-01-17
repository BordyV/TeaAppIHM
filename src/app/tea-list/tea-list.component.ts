import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
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
export class TeaListComponent implements OnInit {

  // ELEMENT_DATA: Tea[] = [
  //   {
  //     _id: "507f191e810c19729de860ea",
  //     reference: 71512,
  //     name: "Thé vert",
  //     stock: []
  //   },
  //   {
  //     _id: "507f191e810c19729de860ea",
  //     reference: 41512,
  //     name: "Thé noir",
  //     stock: [{
  //       location: "rangée 4b",
  //       dateExp: new Date(),
  //       quantity: 10,
  //     }],
  //   },
  // ];
  ELEMENT_DATA: Tea[] = [];

  displayedColumns: string[] = ['reference', 'name', 'totalQuantity'];
  dataSource = this.ELEMENT_DATA;


  toggleRow(element: { expanded: boolean; }) {
    element.expanded = !element.expanded
  }

  constructor(private teaService: TeaService) { }

  ngOnInit(): void {
    this.getTeas();
  }

  getTeas() {
    this.teaService.getTeas().subscribe((data) => {
      this.ELEMENT_DATA = data;
      this.dataSource = data;
      console.log(data);
    });
  }
}
