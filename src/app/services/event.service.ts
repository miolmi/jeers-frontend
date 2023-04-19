import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Event} from "../models/event.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) {
  }

  loadAll() {
    // TODO: check, if url is correct. are sold events really hidden?
    return this.httpClient.get<Event[]>(environment.apiUrl + 'event')
  }

}
