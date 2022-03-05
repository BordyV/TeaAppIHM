import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { LogService } from 'src/app/services/log.service';
import { TeaService } from 'src/app/services/tea.service';
import { ImportTeasDialogComponent } from './import-teas-dialog/import-teas-dialog.component';

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.scss']
})
export class ProfilPageComponent implements OnInit {
  progressBar = false;

  constructor(
    private authService: AuthService,
    private teaService: TeaService,
    private logService: LogService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,

  ) { }

  ngOnInit(): void {
  }

  initTeas() {
    this.progressBar = true;

    this.teaService.initBdMockData().subscribe(() => {
      this.progressBar = false;

      this._snackBar.open("Thés ajoutés correctement ", "fermer", {
        duration: 2 * 1000,
        verticalPosition: 'top',
      });
    });
  }
  
  importTeas() {
    const dialogRef = this.dialog.open(ImportTeasDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.progressBar = true;
        this.teaService.setTeasFromList(result).subscribe(
          {
            next: () => {
              this._snackBar.open("Thés ajoutés correctement ", "fermer", {
                duration: 2 * 1000,
                verticalPosition: 'top',
              });
            },
            error: (e) => {
              this.progressBar = false;
              this._snackBar.open("Une erreur est survenue.", "fermer", {
                duration: 2 * 1000,
                verticalPosition: 'top',
              });
            },
            complete: () => {
              this.progressBar = false;
            }
          });
        }
    });
  }

  exportTeas() {
    this.teaService.getTeas().subscribe((data) => {
    //code from : https://stackoverflow.com/a/49603945
      let sJson = JSON.stringify(data);
      let element = document.createElement('a');
      let nameFile = "tea_" + new Date().toLocaleDateString() + ".json";
      element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
      element.setAttribute('download',nameFile);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click(); // simulate click
      document.body.removeChild(element);
    });
  }

  deleteTeas() {
    this.progressBar = true;
    this.teaService.deleteAllTeas().subscribe((data) => {
      this.progressBar = false;
      if (data.deletedCount > 0) {
        this._snackBar.open("Thés supprimés correctement ", "fermer", {
          duration: 2 * 1000,
          verticalPosition: 'top',
        });
      } else {
        this._snackBar.open("Aucun thés n'a pu être supprimé", "fermer", {
          duration: 2 * 1000,
          verticalPosition: 'top',
        });
      }
    });
  }

  deleteLogs() {
    this.progressBar = true;
    this.logService.deleteAllLogs().subscribe((data) => {
      this.progressBar = false;
      if (data.deletedCount > 0) {
        this._snackBar.open("Logs supprimés correctement ", "fermer", {
          duration: 2 * 1000,
          verticalPosition: 'top',
        });
      } else {
        this._snackBar.open("Aucun logs n'a pu être supprimé", "fermer", {
          duration: 2 * 1000,
          verticalPosition: 'top',
        });
      }
    });
  }

  getUserEmail() {
    return this.authService.getUserName();
  }
}
