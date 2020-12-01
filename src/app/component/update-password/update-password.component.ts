import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {PasswordService} from '../../../services/password.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

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
  location: Location;
  router: Router;
  hide = true;

  constructor(location: Location,
              router: Router,
              private passwordService: PasswordService,
              private snackBar: MatSnackBar) {

    this.location = location;
    this.router = router;

  }

  ngOnInit(): void {
  }

  navigateBack() {
    this.router.navigate(
      ['/bakery-orders'], {replaceUrl: true});  }

  confirm() {
   /* if (this.hashPassword(this.enteredCurrentPassword.trim())
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
    }*/

    this.router.navigate(
      ['/bakery-orders'], {replaceUrl: true});
  }

  hashPassword(pass: string) {
    return pass;
  }

}
