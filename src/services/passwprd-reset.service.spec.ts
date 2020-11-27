import { TestBed } from '@angular/core/testing';

import { PasswprdResetService } from './passwprd-reset.service';

describe('PasswprdResetService', () => {
  let service: PasswprdResetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswprdResetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
