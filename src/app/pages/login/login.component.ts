import {Component} from '@angular/core';
import {NonNullableFormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {ErrorResponseDTO} from "../../models/error-response.dto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = this.formBuilder.group({
    emailAddress: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  })

  invalidCredentials = false;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private router: Router,
    private authService: AuthenticationService,
  ) {
  }

  public login(): void {
    this.invalidCredentials = false;

    if (this.form.valid) {
      const emailAddress = this.form.controls.emailAddress.value;
      const password = this.form.controls.password.value;

      this.authService.login({
          emailAddress,
          password
        }
      ).subscribe({
        next: response => {
          this.router.navigate(['overview']);
        },
        error: (response: ErrorResponseDTO) => {
          if (response.error.type === 'InvalidCredentials') {
            this.invalidCredentials = true;
          }
        }
      });
    }
  }
}
