import {Event} from "./event.model";

export interface Ticket {
  description: string,
  creditPrice: number,
  event: Event
}
