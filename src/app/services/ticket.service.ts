import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateTicketDto} from "../models/create-ticket.dto";
import {Ticket} from "../models/ticket.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httpClient: HttpClient) { }

  sell(description: string, price: number, eventId: number) {
    const dto: CreateTicketDto = {
      description: description,
      price: price,
      eventId: eventId
    };

    this.httpClient.post('http://localhost:8080/jeers-web/api/ticket', dto).subscribe(value => console.log(value));
  }

  loadAll(): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>('http://localhost:8080/jeers-web/api/ticket')
  }
}
