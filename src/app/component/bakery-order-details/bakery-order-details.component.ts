import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {BakeryWeekSellerOrderDetails} from '../../model/BakeryWeekSellerOrderDetalis';
import {OrderDetailsService} from '../../../services/order-details.service';
import {SummaryItem} from '../../model/SummaryItem';

@Component({
  selector: 'app-bakery-order-details',
  templateUrl: './bakery-order-details.component.html',
  styleUrls: ['./bakery-order-details.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class BakeryOrderDetailsComponent implements OnInit {
  location: Location;
  title = 'Order details';
  sellerId = '';
  orderProducts: BakeryWeekSellerOrderDetails | undefined;
  expanded = true;
  summary: SummaryItem[];
  details: SummaryItem[];
  constructor(location: Location,
              private orderDetailsService: OrderDetailsService) {
    this.location = location;
    this.summary = [];
    this.details = [];
  }

  ngOnInit(): void {
    this.orderDetailsService.currentSellerId$.subscribe(sellerId => this.sellerId = sellerId);
    console.log('order id = ' + this.sellerId);
    this.title = 'Beställning #' + this.sellerId;
    this.orderProducts = this.orderDetailsService.fetchSellerOrderDetails();
    this.summary = this.orderDetailsService.getWeekSummary();
    this.details = this.orderDetailsService.getWeekDetails();
  }

  sellerItems(sellerId: string): SummaryItem[] {
    return this.details.filter(e => {
      return e.sellerId === sellerId
    });
  }

  orderIds(): string[] {
    return ['1', '2'];
  }
  navigateBack(): void {
    this.location.back();
  }
}
