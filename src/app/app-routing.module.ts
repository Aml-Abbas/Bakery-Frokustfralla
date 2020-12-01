import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BakeryLoginComponent} from './component/bakery-login/bakery-login.component';
import {BakeryOrdersComponent} from './component/bakery-orders/bakery-orders.component';
import {BakeryOrderDetailsComponent} from './component/bakery-order-details/bakery-order-details.component';
import {PasswordComponent} from './component/password/password.component';
import {AuthGuard} from './guards/auth.guard';
import {UpdatePasswordComponent} from './component/update-password/update-password.component';
import {SettingComponent} from './component/setting/setting.component';

const routes: Routes = [
  {path: '', component: BakeryLoginComponent},
  {path: 'bakery-login', component: BakeryLoginComponent},
  {path: 'bakery-orders', component: BakeryOrdersComponent},
  {path: 'bakery-order-details', component: BakeryOrderDetailsComponent},
  {path: 'password', component: PasswordComponent},
  {path: 'update-password', component: UpdatePasswordComponent},
  {path: 'setting', component: SettingComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
