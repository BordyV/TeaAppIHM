import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  userPseudo: string = "";
  userEmail: string = "";
  password: string = "";
  passwordVerification: string = "";
  errorMessage: string = "";
  successMessage: string = "";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.inscription(this.userPseudo, this.userEmail, this.password).subscribe({
      next: (v) => {
        this.successMessage = v.message;
        this.errorMessage = "";
      },
      error: (e) => {
        this.errorMessage = e.error.message;
        this.successMessage = "";
      },
      complete: () => {

      }
    })
  }
}
