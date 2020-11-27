import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BakeryLoginComponent} from './component/bakery-login/bakery-login.component';
import {BakeryOrdersComponent} from './component/bakery-orders/bakery-orders.component';
import {BakeryOrderDetailsComponent} from './component/bakery-order-details/bakery-order-details.component';

const routes: Routes = [
  {path: '', component: BakeryLoginComponent},
  {path: 'bakery-login', component: BakeryLoginComponent},
  {path: 'bakery-orders', component: BakeryOrdersComponent},
  {path: 'bakery-order-details', component: BakeryOrderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
