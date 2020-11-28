
export class BakeryWeekSellers {
  sellerName: string;
  sellerId: string;
  firstProduct: string;

  constructor(seller: string, sellerId: string, firstProduct: string) {
    this.sellerName = seller;
    this.sellerId = sellerId;
    this.firstProduct = firstProduct;
  }
}
