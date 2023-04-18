import {Component} from '@angular/core';
import {TicketService} from "../../services/ticket.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  tickets$ = this.ticketService.loadAll();

  constructor(private ticketService: TicketService) {
  }
}
