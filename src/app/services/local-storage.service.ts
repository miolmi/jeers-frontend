import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";
import {USER_ID_KEY} from "./constants";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private userId$ = new ReplaySubject<number>(1);

  constructor() {
    const userIdString = localStorage.getItem(USER_ID_KEY) || "0";
    this.userId$.next(Number.parseInt(userIdString));
  }

  setUserId(userId: number): void {
    localStorage.setItem(USER_ID_KEY, userId.toString())
    this.userId$.next(userId);
  }

  getUserId(): Observable<number> {
    return this.userId$.asObservable();
  }
}
