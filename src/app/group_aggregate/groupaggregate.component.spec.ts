import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAggregateComponent } from './group-aggregate.component';

describe('ShowdataComponent', () => {
  let component: GroupAggregateComponent;
  let fixture: ComponentFixture<GroupAggregateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupAggregateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAggregateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
