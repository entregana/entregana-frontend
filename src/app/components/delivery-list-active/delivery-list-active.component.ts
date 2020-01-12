import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-delivery-list-active',
  templateUrl: './delivery-list-active.component.html',
  styleUrls: ['./delivery-list-active.component.sass']
})
export class DeliveryListActiveComponent implements OnInit {

  constructor(
    private deliveryService: DeliveryService
  ) { }

  ngOnInit() {
    this.deliveryService.retrieveDeliveries();
  }

  public get deliveries() {
    return this.deliveryService.activeDeliveries;
  }

}
