import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAggregateListComponent } from './group-aggregate-list.component';

describe('GroupAggregateListComponent', () => {
  let component: GroupAggregateListComponent;
  let fixture: ComponentFixture<GroupAggregateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupAggregateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAggregateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
