import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeliveryService } from 'src/app/services/delivery.service';
import { Delivery } from 'src/app/models/delivery';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delivery-update',
  templateUrl: './delivery-update.component.html',
  styleUrls: ['./delivery-update.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class DeliveryUpdateComponent implements OnInit {
  public form: FormGroup;
  public requestIsPending: boolean = false;
  public delivery: Delivery;

  constructor(
    private formBuilder: FormBuilder,
    private deliveryService: DeliveryService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.deliveryService.retrieveDeliveryHistory(id).then((value: Array<Delivery>) => {
      this.delivery = value[0];
      this.createForm();
    });
  }

  createForm() {
    this.form = this.formBuilder.group({
      packageType: [this.delivery.packageType, [Validators.required]],
      courier: [{value: this.delivery.courier, disabled: true}, [Validators.required]],
      recipient: this.formBuilder.group({
        firstName: this.delivery.recipient.firstName,
        lastName: this.delivery.recipient.lastName,
        address: [this.delivery.recipient.address, [Validators.required]],
        email: this.delivery.recipient.email,
        phone: this.delivery.recipient.phone,
        additionalDetails: this.delivery.recipient.additionalDetails,
      }),
      otherDetails: this.delivery.otherDetails,
      status: [{value: this.delivery.status, disabled: false}, [Validators.required]],
    });
  }

  public get packageType() {
    return this.form.get('packageType');
  }

  public get courier() {
    return this.form.get('courier');
  }

  public get firstName() {
    return this.form.get('recipient.firstName');
  }

  public get lastName() {
    return this.form.get('recipient.lastName');
  }

  public get address() {
    return this.form.get('recipient.address');
  }

  public get email() {
    return this.form.get('recipient.email');
  }

  public get phone() {
    return this.form.get('recipient.phone');
  }

  public get additionalDetails() {
    return this.form.get('recipient.additionalDetails');
  }

  public get otherDetails() {
    return this.form.get('otherDetails');
  }

  public get status() {
    return this.form.get('status');
  }

  public get packageTypes() {
    return Delivery.packateTypes
  }

  public updateDelivery() {
    this.requestIsPending = true;
    this.deliveryService.updateDelivery(this.delivery.id, this.form.getRawValue()).then(value => {
      this.requestIsPending = false;
      this.router.navigate(['/deliveries', value.id]);
    });
  }

  public resetForm() {
    this.createForm();
  }
}
