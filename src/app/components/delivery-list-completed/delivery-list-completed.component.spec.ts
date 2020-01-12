import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryListCompletedComponent } from './delivery-list-completed.component';

describe('DeliveryListCompletedComponent', () => {
  let component: DeliveryListCompletedComponent;
  let fixture: ComponentFixture<DeliveryListCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryListCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryListCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
