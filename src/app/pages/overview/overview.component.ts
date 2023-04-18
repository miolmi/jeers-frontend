import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Ticket} from "../../models/ticket.model";
import {TicketService} from "../../services/ticket.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  tickets$: Observable<Ticket[]> = this.ticketService.loadAll().pipe();

  constructor(private ticketService: TicketService) {
  }
}
