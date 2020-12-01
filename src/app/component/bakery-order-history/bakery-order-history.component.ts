import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {BakerySellers} from '../../model/BakerySellers';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderDetailsService} from '../../../services/order-details.service';

@Component({
  selector: 'app-bakery-order-history',
  templateUrl: './bakery-order-history.component.html',
  styleUrls: ['./bakery-order-history.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class BakeryOrderHistoryComponent implements OnInit {

  location: Location;
  title = 'Order historik';
  router: Router;

  sellers: BakerySellers[] ;
  sellerId = '';

  constructor(location: Location,
              router: Router,
              private orderDetails: OrderDetailsService,
              private aRoute: ActivatedRoute) {

    this.location = location;
    this.router = router;
    this.sellers = [];
    this.fetchBakeryHistorySellers();
  }

  ngOnInit(): void {
    this.orderDetails.currentSellerId$.subscribe(sellerId => this.sellerId = sellerId);

  }
  navigateBack(): void {
    this.location.back();
  }

  fetchBakeryHistorySellers(): void {
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
}
