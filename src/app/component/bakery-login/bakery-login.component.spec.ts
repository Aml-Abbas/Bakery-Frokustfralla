import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryLoginComponent } from './bakery-login.component';

describe('BakeryLoginComponent', () => {
  let component: BakeryLoginComponent;
  let fixture: ComponentFixture<BakeryLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakeryLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
