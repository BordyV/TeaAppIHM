import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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


  @Output() progressBarEvent = new EventEmitter<boolean>();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.progressBarEvent.emit(true);
    this.authService.inscription(this.userPseudo, this.userEmail, this.password).subscribe({
      next: (v) => {
        this.progressBarEvent.emit(false);
        this.successMessage = v.message;
        this.errorMessage = "";
      },
      error: (e) => {
        this.progressBarEvent.emit(false);
        this.errorMessage = e.error.message;
        this.successMessage = "";
      },
      complete: () => {
        this.progressBarEvent.emit(false);
      }
    })
  }
}
