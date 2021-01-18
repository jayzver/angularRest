import { TestBed } from '@angular/core/testing';

import { AggregateCollectionService } from './aggregate-collection.service';

describe('AggregateCollectionService', () => {
  let service: AggregateCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AggregateCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
