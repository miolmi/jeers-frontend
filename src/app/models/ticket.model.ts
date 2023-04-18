import {Event} from "./event.model";

export interface Ticket {
  description: string,
  price: number,
  event: Event
}
