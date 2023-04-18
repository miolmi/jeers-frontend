import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateTicketDTO} from "../models/create-ticket.dto";
import {Ticket} from "../models/ticket.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httpClient: HttpClient) {
  }

  sell(description: string, price: number, eventId: number) {
    const dto: CreateTicketDTO = {
      description: description,
      price: price,
      eventId: eventId
    };

    this.httpClient.post(environment.apiUrl + 'ticket', dto).subscribe(value => console.log(value));
  }

  loadAll(): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(environment.apiUrl + 'ticket')
  }
}
