import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregateItemComponent } from './aggregate-item.component';

describe('AggregateItemComponent', () => {
  let component: AggregateItemComponent;
  let fixture: ComponentFixture<AggregateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggregateItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggregateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
