import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-wrapper-auth',
  templateUrl: './wrapper-auth.component.html',
  styleUrls: ['./wrapper-auth.component.scss']
})
export class WrapperAuthComponent implements OnInit {
  retUrl: string = "";

  constructor(private authService: AuthService) { }
  progressBar: boolean = false;
  ngOnInit(): void {

  }
  isLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

}
