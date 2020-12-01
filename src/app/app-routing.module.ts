import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BakeryLoginComponent} from './component/bakery-login/bakery-login.component';
import {BakeryOrdersComponent} from './component/bakery-orders/bakery-orders.component';
import {BakeryOrderDetailsComponent} from './component/bakery-order-details/bakery-order-details.component';
import {PasswordComponent} from './component/password/password.component';
import {UpdatePasswordComponent} from './component/update-password/update-password.component';
import {BakeryOrderHistoryComponent} from './component/bakery-order-history/bakery-order-history.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: BakeryOrdersComponent, canActivate: [AuthGuard]},
  {path: 'bakery-login', component: BakeryLoginComponent},
  {path: 'bakery-orders', component: BakeryOrdersComponent, canActivate: [AuthGuard]},
  {path: 'bakery-order-details', component: BakeryOrderDetailsComponent , canActivate: [AuthGuard]},
  {path: 'password', component: PasswordComponent, canActivate: [AuthGuard]},
  {path: 'update-password', component: UpdatePasswordComponent, canActivate: [AuthGuard]},
  {path: 'bakery-order-history', component: BakeryOrderHistoryComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
