import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BakeryLoginComponent} from './component/bakery-login/bakery-login.component';
import {BakeryOrdersComponent} from './component/bakery-orders/bakery-orders.component';
import {BakeryOrderDetailsComponent} from './component/bakery-order-details/bakery-order-details.component';
import {PasswordComponent} from './component/password/password.component';
import {UpdatePasswordComponent} from './component/update-password/update-password.component';
import {BakeryOrderHistoryComponent} from './component/bakery-order-history/bakery-order-history.component';

const routes: Routes = [
  {path: '', component: BakeryLoginComponent},
  {path: 'bakery-login', component: BakeryLoginComponent},
  {path: 'bakery-orders', component: BakeryOrdersComponent},
  {path: 'bakery-order-details', component: BakeryOrderDetailsComponent},
  {path: 'password', component: PasswordComponent},
  {path: 'update-password', component: UpdatePasswordComponent},
  {path: 'bakery-order-history', component: BakeryOrderHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
