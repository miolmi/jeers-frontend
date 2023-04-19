import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateTicketDTO} from "../models/create-ticket.dto";
import {Ticket} from "../models/ticket.model";
import {environment} from "../../environments/environment";
import {EventService} from "./event.service";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httpClient: HttpClient) {
  }

  loadAll() {
    // TODO: check, if url is correct. are sold tickets really hidden?
    return this.httpClient.get<Ticket[]>(environment.apiUrl + 'ticket')
  }

  sell(data: CreateTicketDTO) {
    // TODO: implement the http request to create a ticket
    return this.httpClient.post<Ticket>(environment.apiUrl + 'ticket', data).subscribe(value => console.log('created ticket'))
  }
}
