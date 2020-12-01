import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BakeryLoginComponent } from './component/bakery-login/bakery-login.component';
import { BakeryOrdersComponent } from './component/bakery-orders/bakery-orders.component';
import { BakeryOrderDetailsComponent } from './component/bakery-order-details/bakery-order-details.component';
import { PasswordComponent } from './component/password/password.component';
import { BakeryOrderHistoryComponent } from './component/bakery-order-history/bakery-order-history.component';
import { UpdatePasswordComponent } from './component/update-password/update-password.component';

import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    BakeryLoginComponent,
    BakeryOrdersComponent,
    BakeryOrderDetailsComponent,
    PasswordComponent,
    UpdatePasswordComponent,
    BakeryOrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    MatListModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatExpansionModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
