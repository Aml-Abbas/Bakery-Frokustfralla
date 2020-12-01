import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // @ts-ignore
  canActivate(){
    if (this.authService.isSignedIn()){
      return true;
    }else {
      // @ts-ignore
      this.router.navigate('/bakery-login');
    }
  }

  constructor(private router: Router,
              private authService: AuthService) {

  }
}
