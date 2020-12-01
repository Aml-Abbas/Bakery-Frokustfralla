import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class SettingComponent implements OnInit {
  title = 'Setting';
  location: Location;

  constructor(location: Location) {
    this.location = location;

  }

  ngOnInit(): void {
  }


  navigateBack() {
    this.location.back();
  }
}
