import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {RegisterRequestDTO} from "../models/user/register-request.dto";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpClient: HttpClient) {
  }

  register(data: RegisterRequestDTO) {
    return this.httpClient.post<RegisterRequestDTO>(environment.apiUrl + 'user', data);
  }
}
