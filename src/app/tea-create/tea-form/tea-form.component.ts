import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tea } from 'src/app/models/tea.model';
import { TeaService } from 'src/app/services/tea.service';

@Component({
  selector: 'app-tea-form',
  templateUrl: './tea-form.component.html',
  styleUrls: ['./tea-form.component.scss']
})
export class TeaFormComponent implements OnInit {

  // associées au champs input du formulaire
  reference: number = 1;
  name: String = "";
  errorMessage: String = "";
  successMessage: String = "";

  @Output() progressBarEvent = new EventEmitter<boolean>();

  constructor(private teaService: TeaService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.progressBarEvent.emit(true);
    let newTea: Tea = new Tea();
    newTea.reference = this.reference;
    newTea.name = this.name;
    this.teaService.addTea(newTea).subscribe({
      next: (v) => {
        this.progressBarEvent.emit(false);
        this.successMessage = v.message;
        this.errorMessage = ""
      },
      error: (e) => {
        this.progressBarEvent.emit(false);
        this.errorMessage = e.error.erreur;
        this.successMessage = ""
      },
      complete: () => {
        this.progressBarEvent.emit(false);
        console.info('complete')
      }
    })
  }
}
