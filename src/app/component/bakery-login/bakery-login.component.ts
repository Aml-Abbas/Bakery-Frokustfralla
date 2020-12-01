import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-bakery-login',
  templateUrl: './bakery-login.component.html',
  styleUrls: ['./bakery-login.component.scss']
})
export class BakeryLoginComponent implements OnInit {
  enteredPassword =  '';
  hide = true;
  router: Router;
  title = 'Välkommen';
  email = '';

  constructor(router: Router,
              private aRoute: ActivatedRoute,
              private authServie: AuthService) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  public login(): void {
    // log in if credentials are correct
    if (this.checkCred()) {
      this.router.navigate(
        ['/bakery-orders'],
        {replaceUrl: true, relativeTo: this.aRoute});
    }
  }

  public checkCred(): boolean {
    return true;
  }

}
