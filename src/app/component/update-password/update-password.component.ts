import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {PasswordService} from '../../../services/password.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class UpdatePasswordComponent implements OnInit {
  title = 'Uppdatera ditt lösenord';

  enteredCurrentPassword = '';
  enteredNewPassword = '';
  enteredNewPassword2 = '';

  hideCurrent = true;

  hide = true;
  // @ts-ignore
  location: Location;

  // @ts-ignore
  constructor(private location: Location,
              private passwordService: PasswordService,
              private snackBar: MatSnackBar) {
    this.location = location;

  }

  ngOnInit(): void {
  }

  navigateBack() {
    this.location.back();
  }

  confirm() {
    if (this.hashPassword(this.enteredCurrentPassword.trim())
      !== this.passwordService.getUsersCurrentPassword('')) {
      this.snackBar.open('Fel nuvarande lösenord!', 'Ok', {
        duration: 2000
      });
    } else if (this.enteredNewPassword !== this.enteredNewPassword2) {
      this.snackBar.open('Lösenorden matchar inte!', 'Ok', {
        duration: 2000
      });
    } else {
      this.snackBar.open('Lösenord uppdaterat', 'Ok', {
        duration: 2000
      });
      this.passwordService.saveNewPassword(this.enteredNewPassword);
      this.location.back();
    }
  }

  hashPassword(pass: string) {
    return pass;
  }

}
