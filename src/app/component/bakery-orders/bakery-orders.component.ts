import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {OrderDetailsService} from '../../../services/order-details.service';
import {BakeryWeekOrdersItem} from '../../model/BakeryWeekOrderItem';

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
  orders: BakeryWeekOrdersItem[];
  orderId = '';

  constructor(location: Location,
              router: Router,
              private orderDetails: OrderDetailsService,
              private aRoute: ActivatedRoute) {
    this.location = location;
    this.router = router;
    this.orders = [];
    this.fetchBakeryWeekOrders();

  }

  ngOnInit(): void {
    this.orderDetails.currentOrderId$.subscribe(orderId => this.orderId = orderId);
  }
  public navigateBack(): void {
    this.location.back();
  }

  fetchBakeryWeekOrders(): void {
    for (let i = 0; i < 10; i++) {
      this.orders.push(
        new BakeryWeekOrdersItem('Säljare ' + (i + 1), (i + 9).toString(), 30, 'Fralla')
      );
    }
  }

  navigateToDetails(orderId: string): void {
    this.orderDetails.setOrderId(orderId);
    this.router.navigate(['/bakery-order-details'], {relativeTo: this.aRoute});
  }
}
