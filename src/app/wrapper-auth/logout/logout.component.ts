import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TeaService } from 'src/app/services/tea.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private teaService: TeaService) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logoutUser();
  }
  initTeas() {
    this.teaService.initBdMockData().subscribe(() => {
      console.log('LA BASE EST ENTIEREMENT REMPLIE AVEC LES DONNEES DE TEST');
    });
  }
}
