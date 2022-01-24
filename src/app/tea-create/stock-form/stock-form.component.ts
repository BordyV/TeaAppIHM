import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Stock } from 'src/app/models/stock.model';
import { Tea } from 'src/app/models/tea.model';
import { TeaService } from 'src/app/services/tea.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.scss']
})
export class StockFormComponent implements OnInit {
  referenceControl = new FormControl();
  quantity: number = 0;
  location: string = "";
  dateExp!: Date;

  listReference: string[] = [];
  filteredRef!: Observable<string[]>;
  errorMessage: String = "";
  successMessage: String = "";

  constructor(private teaService: TeaService) { }

  ngOnInit(): void {
    //si la liste de thé n'existe pas on la récupère
    if (this.teaService.teaList.length <= 0) {
      this.teaService.getTeas().subscribe((data) => {
        this.teaService.teaList = data;
        this.initFilter();
      });
    }
    else {
      this.initFilter();
    }

  }

  private initFilter() {
    this.listReference = this.teaService.getReferenceName();
    this.filteredRef = this.referenceControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.listReference.filter(ref => ref.toLowerCase().includes(filterValue));
  }
  onSubmit() {
    let newStock: Stock = new Stock();
    newStock.quantity = this.quantity;
    newStock.location = this.location;
    newStock.dateExp = this.dateExp;
    let index = this.listReference.indexOf(this.referenceControl.value);
    let tea: Tea = this.teaService.teaList[index];
    //si le thé existe on rajoute du stock
    if (tea) {
      this.teaService.addStockToTea(newStock, tea._id).subscribe({
        next: (v) => {
          this.errorMessage = "";
          this.successMessage = v;
        },
        error: (e) => {
          this.errorMessage = e.error.erreur;
          this.successMessage = "";
        },
        complete: () => console.info('complete')
      })
    } else {
      this.errorMessage = "Veuillez choisir une référence existante";
      this.successMessage = "";
    }
  }
}
