import { TestBed } from '@angular/core/testing';

import { PendingRequstsService } from './pending-requsts.service';

describe('PendingRequstsService', () => {
  let service: PendingRequstsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingRequstsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
