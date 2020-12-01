import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {BakeryDetailsItem} from '../app/model/BakeryDetailsItem';
import {BakeryWeekSellerOrderDetails} from '../app/model/BakeryWeekSellerOrderDetalis';
import {SummaryItem} from '../app/model/SummaryItem';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  // Observable sources
  private sellerIdSource = new BehaviorSubject<string>('-1');

  // Observable streams
  currentSellerId$ = this.sellerIdSource.asObservable();
  constructor() { }

  setSellerId(sellerId: string): void {
    this.sellerIdSource.next(sellerId);
  }

  fetchSellerOrderDetails(): BakeryWeekSellerOrderDetails {
    const products: BakeryDetailsItem[] = [];
    for (let i = 0; i < 3; i++) {
      products.push(new BakeryDetailsItem(
        '10',
        (i + 1),
        'i'
        )
      );
    }

    return new BakeryWeekSellerOrderDetails(
      'Alexandiar',
      '0760539334',
      90,
      products
    );

  }

  getSummary(): SummaryItem[] {
    return [
      new SummaryItem('1', 'Baugette', 3, '', '1'),
      new SummaryItem('1', 'Donut', 4, '', '1'),
      new SummaryItem('2', 'Baugette', 2, '', '1')
    ];
  }

  getDetails(): SummaryItem[] {
    return [
      new SummaryItem('1', 'Baugette', 2, '', '1'),
      new SummaryItem('2', 'Baugette', 1, '', '1'),
      new SummaryItem('1', 'Donut', 2, '', '1'),
      new SummaryItem('2', 'Donut', 2, '', '1'),
      new SummaryItem('1', 'Baugette', 2, '', '1')
    ];
  }
}
