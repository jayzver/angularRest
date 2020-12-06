import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGroupAggregateItemComponent } from './menu-group-aggregate-item.component';

describe('MenuGroupAggregateItemComponent', () => {
  let component: MenuGroupAggregateItemComponent;
  let fixture: ComponentFixture<MenuGroupAggregateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuGroupAggregateItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGroupAggregateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
