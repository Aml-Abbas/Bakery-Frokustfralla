
export class BakeryWeekOrdersItem {
  seller: string;
  orderId: string;
  total: number;
  firstProduct: string;

  constructor(seller: string, orderId: string, total: number, firstProduct: string) {
    this.seller = seller;
    this.orderId = orderId;
    this.total = total;
    this.firstProduct = firstProduct;
  }
}
