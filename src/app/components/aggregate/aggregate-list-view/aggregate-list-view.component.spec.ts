import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregateListViewComponent } from './aggregate-list-view.component';

describe('AggregateListViewComponent', () => {
  let component: AggregateListViewComponent;
  let fixture: ComponentFixture<AggregateListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggregateListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregateListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
