import {Event} from "./event.model";
import {User} from "./user/user.model";

// TODO: check if interface matches with structure from backend
export interface Ticket {
  description: string,
  price: number,
  event: Event,
  buyer: User | undefined,
  seller: User
}
