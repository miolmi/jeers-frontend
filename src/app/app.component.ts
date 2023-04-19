import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LocalStorageService} from "./services/local-storage.service";
import {of, switchMap} from "rxjs";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user$ = this.localStorageService.getUserId().pipe(
    switchMap(userId => {
      if (userId) {
        return this.userService.loadById(userId);
      }

      return of(null)
    })
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
