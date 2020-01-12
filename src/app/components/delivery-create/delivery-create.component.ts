import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeliveryService } from 'src/app/services/delivery.service';
import { Delivery } from 'src/app/models/delivery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-create',
  templateUrl: './delivery-create.component.html',
  styleUrls: ['./delivery-create.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class DeliveryCreateComponent implements OnInit {
  public form: FormGroup;
  public requestIsPending: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private deliveryService: DeliveryService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      packageType: ['', [Validators.required]],
      courier: ['', [Validators.required]],
      recipient: this.formBuilder.group({
        firstName: '',
        lastName: '',
        address: ['', [Validators.required]],
        email: '',
        phone: '',
        additionalDetails: ''
      }),
      otherDetails: '',
      status: ['', [Validators.required]],
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

  public createDelivery() {
    this.requestIsPending = true;
    this.deliveryService.createDelivery(this.form.value).then(value => {
      this.requestIsPending = false;
      this.router.navigate(['/deliveries', value.id]);
    });
  }

  public resetForm() {
    this.form.reset();
  }


}
