import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // associées au champs input du formulaire
  userName: string = "";
  password: string = "";
  errorMessage: string = "";
  successMessage: string = "";
  retUrl: string = "";
  @Output() progressBarEvent = new EventEmitter<boolean>();

  constructor(private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .subscribe(params => {
        if (params.get('retUrl')) {
          this.retUrl = params.get('retUrl')!;
        }
      });
  }

  onSubmit() {
    this.progressBarEvent.emit(true);
    this.authService.login(this.userName, this.password).subscribe({
      next: (v) => {
        this.progressBarEvent.emit(false);
        this.authService.setSessionJWT(v.token);
        this.errorMessage = ""
      },
      error: (e) => {
        this.progressBarEvent.emit(false);
        this.errorMessage = e.error.message;
      },
      complete: () => {
        this.progressBarEvent.emit(false);
        if (this.retUrl != null) {
          this.router.navigate([this.retUrl]);
        } else {
          this.router.navigate(['home']);
        }
      }
    })
  }
}
