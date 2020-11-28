export class SummaryItem {
  breadId: string;
  name: string;
  count: number;
  imageSrc: string;
  sellerId: string;
  constructor(breadId: string, name: string, count: number, imageSrc: string, sellerId: string) {
    this.breadId = breadId;
    this.name = name;
    this.count = count;
    this.imageSrc = imageSrc;
    this.sellerId = sellerId;
  }
}
