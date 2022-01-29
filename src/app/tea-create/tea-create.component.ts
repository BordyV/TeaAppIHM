import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tea-create',
  templateUrl: './tea-create.component.html',
  styleUrls: ['./tea-create.component.scss']
})
export class TeaCreateComponent implements OnInit {
  progressBar = false;
  constructor() { }

  ngOnInit(): void {
  }
}
