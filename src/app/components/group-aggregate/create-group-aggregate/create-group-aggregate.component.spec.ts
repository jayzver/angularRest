import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupAggregateComponent } from './create-group-aggregate.component';

describe('CreateGroupAggregateComponent', () => {
  let component: CreateGroupAggregateComponent;
  let fixture: ComponentFixture<CreateGroupAggregateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGroupAggregateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGroupAggregateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
