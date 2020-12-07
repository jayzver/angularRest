import { TestBed } from '@angular/core/testing';

import { GroupAggregateCollectionService } from './group-aggregate-collection.service';

describe('GroupAggregateCollectionService', () => {
  let service: GroupAggregateCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupAggregateCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
