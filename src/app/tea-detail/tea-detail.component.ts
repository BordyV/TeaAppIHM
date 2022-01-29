import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Log } from '../models/log.model';
import { Tea } from '../models/tea.model';
import { LogService } from '../services/log.service';
import { TeaService } from '../services/tea.service';
import { DeleteTeaDialogComponent } from './delete-tea-dialog/delete-tea-dialog.component';

@Component({
  selector: 'app-tea-detail',
  templateUrl: './tea-detail.component.html',
  styleUrls: ['./tea-detail.component.scss']
})
export class TeaDetailComponent implements OnInit {
  teaDetail?: Tea;
  logsTeaDetail?: Log[];

  constructor(private teaService: TeaService,
    private logService: LogService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getTeaDetail();
    this.getLogTeaDetail();
  }

  getTeaDetail() {
    // on récupère l'id dans l'URL
    const id: string = this.route.snapshot.params['id'];
    this.teaService.getTeaById(id).subscribe((data) => {
      this.teaDetail = data;
    });
  }

  getLogTeaDetail() {
    // on récupère l'id dans l'URL
    const id: string = this.route.snapshot.params['id'];
    this.logService.getLogsByidOperationDocument(id).subscribe((data) => {
      data.sort(function (a, b) {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      })
      this.logsTeaDetail = data;
    });
  }

  goToAddStock() {
    this.router.navigate(['/creer']);
  }

  goToOutStock() {
    this.router.navigate(['/sortirStock']);
  }

  openDialogDeleteTea() {
    const dialogRef = this.dialog.open(DeleteTeaDialogComponent, { data: this.teaDetail! });

    dialogRef.afterClosed().subscribe(result => {
      
      if (result) {
        this.teaService.deleteTea(this.teaDetail!).subscribe({
          next: (v) => {
            if (v.reference)
            {
              this._snackBar.open("Suppression effectuée", "fermer", {
                duration: 2 * 1000,
                verticalPosition: 'top',
              });
            }
            this.router.navigate(['/']);
          },
          error: (e) => {
          this._snackBar.open("Erreur lors de la suppression: " + e, "fermer", {
                duration: 2 * 1000,
                verticalPosition: 'top',
              });
          },
          complete: () => {
          }
        });
      }
    });
  }
}