import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tea } from '../models/tea.model';
import { TeaService } from '../services/tea.service';

@Component({
  selector: 'app-tea-detail',
  templateUrl: './tea-detail.component.html',
  styleUrls: ['./tea-detail.component.scss']
})
export class TeaDetailComponent implements OnInit {
  teaDetail?: Tea;

  constructor(private teaService: TeaService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getTeaDetail();
  }

  getTeaDetail() {
    // on récupère l'id dans l'URL
    const id: string = this.route.snapshot.params['id'];
    this.teaService.getTeaById(id).subscribe((data) => {
      this.teaDetail = data;
    });
  }

  goToAddStock() {
    this.router.navigate(['/creer']);

  }
  goToOutStock() {
    this.router.navigate(['/sortirStock']);

  }
}
