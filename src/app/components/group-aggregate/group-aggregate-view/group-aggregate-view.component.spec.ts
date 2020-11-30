import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAggregateViewComponent } from './group-aggregate-view.component';

describe('GroupAggregateViewComponent', () => {
  let component: GroupAggregateViewComponent;
  let fixture: ComponentFixture<GroupAggregateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupAggregateViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAggregateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
