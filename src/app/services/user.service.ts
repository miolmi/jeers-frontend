import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateTicketDTO} from "../models/create-ticket.dto";
import {Ticket} from "../models/ticket.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {User} from "../models/user.model";

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
