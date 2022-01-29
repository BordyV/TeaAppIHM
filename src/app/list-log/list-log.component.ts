import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Log } from '../models/log.model';
import { LogService } from '../services/log.service';
export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-list-log',
  templateUrl: './list-log.component.html',
  styleUrls: ['./list-log.component.scss']
})
export class ListLogComponent implements OnInit {
  logs: Log[] = [];
  constructor(private logService: LogService, private router: Router) { }

  ngOnInit(): void {
    this.getLogs();
  }

  getLogs() {
    this.logService.getLogs().subscribe((data) => {
      data.sort(function (a, b) {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      })
      this.logs = data;
    });
  }

  changeToDetail(id: string | undefined) {
    if (id) {
      this.router.navigate(['/detail', id]);
    }
  }


}
