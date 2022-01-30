import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TeaService } from 'src/app/services/tea.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logoutUser();
  }

}
