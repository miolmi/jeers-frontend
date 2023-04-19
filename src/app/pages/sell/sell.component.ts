import {Component, OnInit} from '@angular/core';
import {NonNullableFormBuilder, Validators} from "@angular/forms";
import {TicketService} from "../../services/ticket.service";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})


export class SellComponent {

  public eventSet = this.eventService.loadAll();

  public ticketForm = this.form.group({
    eventId: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.min(0)]]
  });

  constructor(
    private ticketService: TicketService,
    private form: NonNullableFormBuilder,
    private eventService: EventService
  ) {

  }

  sellTicket() {
    if (this.ticketForm.valid) {
      const description = this.ticketForm.controls.description.value;
      const price = Number(this.ticketForm.controls.price.value);
      const eventId = Number(this.ticketForm.controls.eventId.value);
      this.ticketService.sell({
        description,
        price,
        eventId,
        sellerId: 1 // TODO: use logged in user id
      });
    }
  }

}
