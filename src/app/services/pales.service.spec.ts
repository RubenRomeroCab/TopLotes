import { TestBed } from '@angular/core/testing';

import { PalesService } from './pales.service';

describe('PalesService', () => {
  let service: PalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
