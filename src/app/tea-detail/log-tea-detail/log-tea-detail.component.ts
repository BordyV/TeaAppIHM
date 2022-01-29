import { Component, Input, OnInit } from '@angular/core';
import { Log } from 'src/app/models/log.model';

@Component({
  selector: 'app-log-tea-detail',
  templateUrl: './log-tea-detail.component.html',
  styleUrls: ['./log-tea-detail.component.scss']
})
export class LogTeaDetailComponent implements OnInit {
  //props in
  @Input() logs: Log[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
