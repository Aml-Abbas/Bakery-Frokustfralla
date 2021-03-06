import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {OrderDetailsService} from '../../../services/order-details.service';
import {BakerySellers} from '../../model/BakerySellers';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-bakery-orders',
  templateUrl: './bakery-orders.component.html',
  styleUrls: ['./bakery-orders.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class BakeryOrdersComponent implements OnInit {
  title = 'Beställningar';

  location: Location;
  router: Router;
  sellers: BakerySellers[] ;
  sellerId = '';

  constructor(location: Location,
              router: Router,
              private authService: AuthService,
              private orderDetails: OrderDetailsService,
              private aRoute: ActivatedRoute) {
    this.location = location;
    this.router = router;
    this.sellers = [];
    this.fetchBakeryWeekSellers();

  }

  ngOnInit(): void {
    this.orderDetails.currentSellerId$.subscribe(sellerId => this.sellerId = sellerId);
  }
  public navigateBack(): void {
    this.router.navigate(['/bakery-login'], {relativeTo: this.aRoute});  }

  fetchBakeryWeekSellers(): void {
    for (let i = 0; i < 10; i++) {
      this.sellers.push(
        new BakerySellers('Säljare ' + (i + 1), (i + 9).toString(),'Fralla')
      );
    }
  }

  navigateToDetails(sellerId: string): void {
    this.orderDetails.setSellerId(sellerId);
    this.router.navigate(['/bakery-order-details'], {relativeTo: this.aRoute});
  }

  logOut() {
    this.authService.signOut();
      this.router.navigate(
        ['/bakery-login'],
        {replaceUrl: true, relativeTo: this.aRoute});

  }

  changePassword(){
    this.router.navigate(
      ['/update-password'],
      {replaceUrl: true, relativeTo: this.aRoute});
  }

}
