import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {LoginResponseDto} from "../../models/login-response.dto";
import {LoginRequestDto} from "../../models/login-request.dto";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = this.formBuilder.group({
    email: ['', Validators.email],
    password: [''],
  })

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
  }

  public login(): void {
    if (this.form.valid) {
      const request: LoginRequestDto = {
        email: this.form.controls.email.value,
        password: this.form.controls.password.value,
      }

      this.httpClient.post<LoginResponseDto>('http://localhost:8080/jeers-web/api/user', request).subscribe(value => {
        this.localStorageService.setUserId(value.id)
        this.router.navigate(['overview'])
      })
    }
  }

  ngOnInit() {
  }
}
