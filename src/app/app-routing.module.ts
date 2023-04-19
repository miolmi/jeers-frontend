import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {SellComponent} from "./pages/sell/sell.component";
import {OverviewComponent} from "./pages/overview/overview.component";
import {RegisterComponent} from "./pages/register/register.component";

const routes: Routes = [
  {
    path: 'overview', component: OverviewComponent
  },
  {
    path: 'sell', component: SellComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
