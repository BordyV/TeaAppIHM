import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Log } from 'src/app/models/log.model';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-log-tea-detail',
  templateUrl: './log-tea-detail.component.html',
  styleUrls: ['./log-tea-detail.component.scss']
})
export class LogTeaDetailComponent implements OnInit {
  //props in
  @Input() logs: Log[] = [];

  constructor(private logService: LogService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
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
