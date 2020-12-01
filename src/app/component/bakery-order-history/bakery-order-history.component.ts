import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-bakery-order-history',
  templateUrl: './bakery-order-history.component.html',
  styleUrls: ['./bakery-order-history.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class BakeryOrderHistoryComponent implements OnInit {

  location: Location;
  title = 'Order historik';


  constructor(location: Location) {
    this.location = location;

  }

  ngOnInit(): void {
  }
  navigateBack(): void {
    this.location.back();
  }
}
