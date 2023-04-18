import {Component, OnInit} from '@angular/core';
import {NonNullableFormBuilder, Validators} from "@angular/forms";
import {TicketService} from "../../services/ticket.service";

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent {

  public ticketForm = this.form.group({
    description: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.min(0)]],
    eventId: ['', [Validators.required]]
  });

  constructor(
    private ticketService: TicketService,
    private form: NonNullableFormBuilder,
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
        sellerId: 1
      });
    }
  }
}
