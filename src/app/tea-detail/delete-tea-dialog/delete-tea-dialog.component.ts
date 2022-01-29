import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tea } from 'src/app/models/tea.model';
import { TeaDetailComponent } from '../tea-detail.component';

@Component({
  selector: 'app-delete-tea-dialog',
  templateUrl: './delete-tea-dialog.component.html',
  styleUrls: ['./delete-tea-dialog.component.scss']
})
export class DeleteTeaDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TeaDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tea) { }

  ngOnInit(): void {
  }

}
