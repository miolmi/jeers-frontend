import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {environment} from "../../environments/environment";
import {LocalStorageService} from "./local-storage.service";
import {LoginResponseDTO} from "../models/user/login-response.dto";
import {LoginRequestDTO} from "../models/user/login-request.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService) {
  }

  login(data: LoginRequestDTO) {
    return this.httpClient.post<LoginResponseDTO>(environment.apiUrl + 'auth', data).pipe(
      tap(response => this.localStorageService.setUserId(response.id))
    );
  }
}
