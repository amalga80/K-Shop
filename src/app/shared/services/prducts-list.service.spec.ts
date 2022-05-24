import { TestBed } from '@angular/core/testing';

import { PrductsListService } from './prducts-list.service';

describe('PrductsListService', () => {
  let service: PrductsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrductsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
