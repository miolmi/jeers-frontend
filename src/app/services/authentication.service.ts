import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {LoginResponseDTO} from "../models/user/login-response.dto";
import {LoginRequestDTO} from "../models/user/login-request.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient) {
  }

  login(data: LoginRequestDTO) {
    return this.httpClient.post<LoginResponseDTO>(environment.apiUrl + 'auth', data);
  }
}
