import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliveryService } from 'src/app/services/delivery.service';
import { Delivery } from 'src/app/models/delivery';
import { RecordType } from 'src/app/enums/recordType';

@Component({
  selector: 'app-delivery-detail',
  templateUrl: './delivery-detail.component.html',
  styleUrls: ['./delivery-detail.component.sass']
})
export class DeliveryDetailComponent implements OnInit {
  public deliveries: Array<Delivery> = [];
  public isCompleteModalOpened: boolean = false;
  public isRequestPendingModalOpen: boolean = false;
  public isSuccessModalOpen: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private deliveryService: DeliveryService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.deliveryService.retrieveDeliveryHistory(id).then((value: Array<Delivery>) => {
      this.deliveries = value;
    });
  }

  public get isDeliveryActive() {
    return this.deliveries.length ? this.deliveries[0].isCurrent : false;
  }

  public get currentActiveDelivery() {
    return this.deliveries.length ? this.deliveries[0] : null;
  }

  public completeDelivery() {
    this.isRequestPendingModalOpen = true;
    this.isCompleteModalOpened = false;
    this.deliveryService.completeDelivery(this.deliveries[0].id).then(_ => {
      this.deliveries[0].type = RecordType.HISTORICAL;
      this.isRequestPendingModalOpen = false;
      this.isSuccessModalOpen = true;
    })
  }

}
