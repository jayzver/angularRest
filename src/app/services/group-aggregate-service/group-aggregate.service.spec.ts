import { TestBed } from '@angular/core/testing';

import { GroupAggregateService } from './group-aggregate.service';

describe('GroupAggregateService', () => {
  let service: GroupAggregateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupAggregateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
