import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Ticket} from "../../models/ticket.model";
import {TicketService} from "../../services/ticket.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  tickets$: Observable<Ticket[]> = this.ticketService.loadAll();

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
  }
}
