import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LocalStorageService} from "./services/local-storage.service";
import {filter, switchMap} from "rxjs";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  userId$ = this.localStorageService.getUserId();
  user$ = this.userId$.pipe(
    filter(userId => !!userId),
    switchMap(userId => this.userService.loadById(userId))
  )

  constructor(private router: Router, private localStorageService: LocalStorageService, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.localStorageService.setUserId(0);
    this.router.navigate(['login'])
  }

}
