import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryOrdersComponent } from './bakery-orders.component';

describe('BakeryOrdersComponent', () => {
  let component: BakeryOrdersComponent;
  let fixture: ComponentFixture<BakeryOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakeryOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
