import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {TicketService} from "../../services/ticket.service";

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  public ticketForm = this.form.group({
    event: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required]]
  });

  constructor(
    private ticketService: TicketService,
    private form: FormBuilder,
  ) {
  }

  ngOnInit() {
  }


  sellTicket() {
    console.log(this.ticketForm.valid);
    if(this.ticketForm.valid) {
      const description = this.ticketForm.get('description').value;
      const price = this.ticketForm.get('price').value;
      const event = this.ticketForm.get('event').value;
      this.ticketService.sell(description, price, event);
    }
  }
}
