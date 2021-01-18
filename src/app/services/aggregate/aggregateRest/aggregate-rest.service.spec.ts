import { TestBed } from '@angular/core/testing';

import { AggregateRestService } from './aggregate-rest.service';

describe('AggregateRestService', () => {
  let service: AggregateRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AggregateRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
