import {BakeryDetailsItem} from './BakeryDetailsItem';

export class BakeryWeekSellerOrderDetails {
  seller: string;
  mobileNumber: string;
  total: number;
  products: BakeryDetailsItem[];


  constructor(seller: string, mobileNumber: string,
              total: number, products: BakeryDetailsItem[]) {
    this.seller = seller;
    this.mobileNumber = mobileNumber;
    this.total = total;
    this.products = products;
  }
}
