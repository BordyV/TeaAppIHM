import { BooleanInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Tea } from 'src/app/models/tea.model';

@Component({
  selector: 'app-import-teas-dialog',
  templateUrl: './import-teas-dialog.component.html',
  styleUrls: ['./import-teas-dialog.component.scss']
})
export class ImportTeasDialogComponent implements OnInit {

  isLinear: BooleanInput = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isEditable = false;
  selectedFile: File | undefined;
  teasFromFile: Tea[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  
  previewTeas(event: Event) {
    if (!(event.target instanceof HTMLInputElement)) return;
    
    this.selectedFile = event.target.files![0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, 'UTF-8');
    fileReader.onload = () => {
      this.teasFromFile=(JSON.parse(fileReader.result!.toString()));
    }
    fileReader.onerror = (error) => {
    console.log(error);
    }
  }

}
