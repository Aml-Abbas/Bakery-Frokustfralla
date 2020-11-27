import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {BakeryDetailsItem} from '../app/model/BakeryDetailsItem';
import {BakeryWeekOrdersItemDetails} from '../app/model/BakeryWeekOrderItemDetalis';
import {SummaryItem} from '../app/model/SummaryItem';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  // Observable sources
  private orderIdSource = new BehaviorSubject<string>('-1');

  // Observable streams
  currentOrderId$ = this.orderIdSource.asObservable();

  constructor() { }

  setOrderId(orderId: string): void {
    this.orderIdSource.next(orderId);
  }

  fetchProducts(): BakeryDetailsItem[] {
    console.log('order id in fetchProducts() = ' + this.currentOrderId$);
    const products: BakeryDetailsItem[] = [];
    for (let i = 0; i < 3; i++) {
      products.push(
        new BakeryDetailsItem(
          '10',
          i + 1,
          'i'
        )
      );
    }
    return products;
  }

  fetchOrdersItemDetails(): BakeryWeekOrdersItemDetails {
    const products: BakeryDetailsItem[] = [];
    for (let i = 0; i < 3; i++) {
      products.push(new BakeryDetailsItem(
        '10',
        (i + 1),
        'i'
        )
      );
    }

    return new BakeryWeekOrdersItemDetails(
      'Alexandiar',
      '0760539334',
      90,
      products
    );

  }

  getWeekSummary(): SummaryItem[] {
    return [
      new SummaryItem('1', 'Baugette', 3, ''),
      new SummaryItem('1', 'Donut', 4, ''),
      new SummaryItem('2', 'Baugette', 2, '')
    ];
  }

  getWeekDetails(): SummaryItem[] {
    return [
      new SummaryItem('1', 'Baugette', 2, ''),
      new SummaryItem('2', 'Baugette', 1, ''),
      new SummaryItem('1', 'Donut', 2, ''),
      new SummaryItem('2', 'Donut', 2, ''),
      new SummaryItem('1', 'Baugette', 2, '')
    ];
  }
}
