import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  // pour la pagination
  page: number = 1;
  limit: number = 6;
  totalDocs: number = 0;
  totalPages: number = 0;
  hasPrevPage: boolean = false;
  prevPage: number = 0;
  hasNextPage: boolean = false;
  nextPage: number = 0;

  constructor(private logService: LogService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getLogs();
  }

  getLogs() {
    this.logService.getLogsPagine(this.page,this.limit).subscribe((data) => {
 
      console.log(data.docs)
      this.logs = data.docs;
      //pagination
      this.page = data.page;
      this.limit = data.limit;
      this.totalDocs = data.totalDocs;
      this.totalPages = data.totalPages;
      this.hasPrevPage = data.hasPrevPage;
      this.prevPage = data.prevPage;
      this.hasNextPage = data.hasNextPage;
      this.nextPage = data.nextPage;
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
  changePage(event: PageEvent) {
    console.log(event)
    this.page = event.pageIndex+1;
    this.limit = event.pageSize;
    this.getLogs();
  }

  backGroundColor(log: Log): string {
    if (log.action.includes("add"))
    {
      return "add";
    } else if (log.action.includes("modify")) {
      return "modify";
    } else if (log.action.includes("delete")) {
      return "delete"; 
    } else {
      return "";
    }
  }
}
