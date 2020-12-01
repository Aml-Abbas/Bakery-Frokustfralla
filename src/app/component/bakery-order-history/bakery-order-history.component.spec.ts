import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryOrderHistoryComponent } from './bakery-order-history.component';

describe('BakeryOrderHistoryComponent', () => {
  let component: BakeryOrderHistoryComponent;
  let fixture: ComponentFixture<BakeryOrderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakeryOrderHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
