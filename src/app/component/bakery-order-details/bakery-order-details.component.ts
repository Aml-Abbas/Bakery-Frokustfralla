import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {BakeryWeekOrdersItemDetails} from '../../model/BakeryWeekOrderItemDetalis';
import {OrderDetailsService} from '../../../services/order-details.service';

@Component({
  selector: 'app-bakery-order-details',
  templateUrl: './bakery-order-details.component.html',
  styleUrls: ['./bakery-order-details.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class BakeryOrderDetailsComponent implements OnInit {
  location: Location;
  title = 'Order details';
  orderId = '';
  itemDetails: BakeryWeekOrdersItemDetails | undefined;


  constructor(location: Location,
              private orderDetailsService: OrderDetailsService) {
    this.location = location;

  }

  ngOnInit(): void {
    this.orderDetailsService.currentOrderId$.subscribe(orderId => this.orderId = orderId);
    console.log('order id = ' + this.orderId);
    this.title = 'Beställning #' + this.orderId;
    this.itemDetails = this.orderDetailsService.fetchOrdersItemDetails();
  }


  navigateBack(): void {
    this.location.back();
  }
}
