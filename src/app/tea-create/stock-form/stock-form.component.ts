import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { TeaService } from 'src/app/services/tea.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.scss']
})
export class StockFormComponent implements OnInit {
  myControl = new FormControl();
  listReference: string[] = [];
  filteredRef!: Observable<string[]>;
  errorMessage: String = "";

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
    this.filteredRef = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.listReference.filter(ref => ref.toLowerCase().includes(filterValue));
  }
  onSubmit() {

  }
}
