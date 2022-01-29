import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private logService: LogService, private router: Router, private _snackBar: MatSnackBar) { }

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
  addCommentaire(log: Log) {
    this.logService.updateLog(log).subscribe({
      next: (v) => {
        if (v.nModified > 0) {
          this.openSnackBar('Commentaire bien enregistré', 'fermer');
        }
        else {
          this.openSnackBar('Problème lors de l\'enregistrement', 'fermer');
        }
      },
      error: (e) => {
        this.openSnackBar(e.message, 'fermer');

      },
      complete: () => {

      }
    });
  }

  handleInput(event: KeyboardEvent): void {
    event.stopPropagation();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2 * 1000,
      verticalPosition: 'top',
    });
  }
}
