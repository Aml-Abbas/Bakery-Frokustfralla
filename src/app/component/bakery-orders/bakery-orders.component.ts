import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {OrderDetailsService} from '../../../services/order-details.service';
import {BakeryWeekSellers} from '../../model/BakeryWeekSellers';

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
  sellers: BakeryWeekSellers[] ;
  sellerId = '';

  constructor(location: Location,
              router: Router,
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
        new BakeryWeekSellers('Säljare ' + (i + 1), (i + 9).toString(),'Fralla')
      );
    }
  }

  navigateToDetails(sellerId: string): void {
    this.orderDetails.setSellerId(sellerId);
    this.router.navigate(['/bakery-order-details'], {relativeTo: this.aRoute});
  }
}
