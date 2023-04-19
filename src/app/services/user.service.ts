import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../models/user/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  loadById(id: number) {
    return this.httpClient.get<User>(`${environment.apiUrl}user/${id}`)
  }
}
