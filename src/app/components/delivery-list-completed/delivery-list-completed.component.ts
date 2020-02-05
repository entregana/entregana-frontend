import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-delivery-list-completed',
  templateUrl: './delivery-list-completed.component.html',
  styleUrls: ['./delivery-list-completed.component.sass']
})
export class DeliveryListCompletedComponent implements OnInit {

  constructor(
    private deliveryService: DeliveryService
  ) { }

  ngOnInit() {
    this.deliveryService.retrieveDeliveries(true);
  }

  public get deliveries() {
    return this.deliveryService.completedDelivieries;
  }

}
