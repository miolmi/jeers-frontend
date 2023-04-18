import {Event} from "./event.model";

// TODO: check if interface matches with structure from backend
export interface Ticket {
  description: string,
  price: number,
  event: Event
}
