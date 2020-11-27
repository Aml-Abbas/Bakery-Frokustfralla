import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryOrderDetailsComponent } from './bakery-order-details.component';

describe('BakeryOrderDetailsComponent', () => {
  let component: BakeryOrderDetailsComponent;
  let fixture: ComponentFixture<BakeryOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakeryOrderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
