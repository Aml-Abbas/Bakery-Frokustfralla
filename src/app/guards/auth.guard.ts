import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private router: Router,
              private authService: AuthService) {

  }

  canActivate(){
    if (this.authService.isSignedIn()){
      return true;
    }else {
      this.router.navigate(['/bakery-login']);
    return false;
    }
  }

}
