import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LocalStorageService} from "./services/local-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  userId$ = this.localStorageService.getUserId();

  constructor(private router: Router, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
  }

  logout(): void {
    this.localStorageService.setUserId(0);
    this.router.navigate(['login'])
  }

}
