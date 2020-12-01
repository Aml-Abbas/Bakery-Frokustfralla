import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PasswordService} from '../../../services/password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class PasswordComponent implements OnInit {

  title = 'Lösenord återställning';
  email = '';
  location: Location;
  hide = true;
  router: Router;

  constructor(router: Router, location: Location,
              private snackBar: MatSnackBar,
              private passwordService: PasswordService) {
    this.location = location;
    this.router = router;

  }

  ngOnInit(): void {
  }

  public navigateBack(): void {
    this.location.back();
  }

  sendResetRequest(): void {
    this.snackBar.open('Tack för din begäran', 'Stäng', {
      duration: 3000
    });
    this.passwordService.requestNewPassword();
    this.location.back();
  }
}
