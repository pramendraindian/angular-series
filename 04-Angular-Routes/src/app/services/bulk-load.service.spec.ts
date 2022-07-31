import { TestBed } from '@angular/core/testing';

import { BulkLoadService } from './bulk-load.service';

describe('BulkLoadService', () => {
  let service: BulkLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulkLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
