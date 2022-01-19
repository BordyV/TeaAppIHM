import { Component, OnInit } from '@angular/core';
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
  constructor(private teaService: TeaService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let newTea: Tea = new Tea();
    newTea.reference = this.reference;
    newTea.name = this.name;
    this.teaService.addTea(newTea).subscribe({
      next: (v) => console.log(v),
      error: (e) => { this.errorMessage = e.error.erreur },
      complete: () => console.info('complete')
    })
  }
}
