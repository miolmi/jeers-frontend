import {Component} from '@angular/core';
import {NonNullableFormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../services/local-storage.service";
import {RegisterService} from "../../services/register.services";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form = this.formBuilder.group( {
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    emailAddress: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  })

  invalidCredentials = false;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {
  }

  public register(): void {
    this.invalidCredentials = false;

    if (this.form.valid) {
      const firstname = this.form.controls.firstname.value;
      const lastname = this.form.controls.lastname.value;
      const emailAddress = this.form.controls.emailAddress.value;
      const password = this.form.controls.password.value;

      this.registerService.register({
        firstname,
        lastname,
        emailAddress,
        password
      }).subscribe({
        next: response => {
          this.router.navigate(['login'])
            .then(() => console.log('navigated to login'));
        },
        error: response => {
          this.invalidCredentials =true;
        }
      })
    }

  }

}
