import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Tea } from '../models/tea.model';
import { TeaService } from '../services/tea.service';

@Component({
  selector: 'app-stock-out',
  templateUrl: './stock-out.component.html',
  styleUrls: ['./stock-out.component.scss']
})
export class StockOutComponent implements OnInit {
  referenceControl = new FormControl("", [Validators.required]);
  quantity: number = 10;
  location: string = "";
  dateExp!: Date;
  filteredTea!: Tea[];
  listReference: string[] = [];
  teaReference: Tea = new Tea;
  filteredRef!: Observable<string[]>;
  errorMessage: String = "";
  successMessage: String = "";
  progressBar: Boolean = false;

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
    //on ne récupère que les thés qui ont du stock 
    this.filteredTea = this.teaService.teaList.filter((tea: Tea) => {
      return tea.stocks?.length;
    });
    this.listReference = this.teaService.getReferenceName(this.filteredTea);
    this.filteredRef = this.referenceControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }
  referenceChanged() {
    let index = this.listReference.indexOf(this.referenceControl.value);
    if (this.filteredTea[index]) {
      this.teaReference = this.filteredTea[index];
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.listReference.filter(ref => ref.toLowerCase().includes(filterValue));
  }
  onSubmit() {
    this.progressBar = true;
    this.teaService.deleteStockToTea(this.quantity, this.teaReference).subscribe({
      next: (v) => {
        this.progressBar = false;
        this.successMessage = v;
        this.errorMessage = ""
      },
      error: (e) => {
        this.progressBar = false;
        this.errorMessage = e.error.erreur;
        this.successMessage = ""
      },
      complete: () => {
        this.progressBar = false;
        console.info('complete')
      }
    });
  }
}
