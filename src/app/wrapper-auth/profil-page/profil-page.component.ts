import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { LogService } from 'src/app/services/log.service';
import { TeaService } from 'src/app/services/tea.service';

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
    private _snackBar: MatSnackBar
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
