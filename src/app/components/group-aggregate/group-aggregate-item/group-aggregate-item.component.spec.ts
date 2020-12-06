import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAggregateItemComponent } from './group-aggregate-item.component';

describe('GroupAggregateItemComponent', () => {
  let component: GroupAggregateItemComponent;
  let fixture: ComponentFixture<GroupAggregateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupAggregateItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAggregateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
