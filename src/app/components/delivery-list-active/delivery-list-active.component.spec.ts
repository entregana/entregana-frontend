import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryListActiveComponent } from './delivery-list-active.component';

describe('DeliveryListActiveComponent', () => {
  let component: DeliveryListActiveComponent;
  let fixture: ComponentFixture<DeliveryListActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryListActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryListActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
