import { TestBed } from '@angular/core/testing';

import { GroupAggregateRestService } from './group-aggregate-rest.service';

describe('GroupAggregateRestService', () => {
  let service: GroupAggregateRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupAggregateRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
