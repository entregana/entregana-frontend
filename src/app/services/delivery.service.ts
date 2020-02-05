import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { DeliveryForm } from '../models/deliveryForm';
import { Delivery } from '../models/delivery';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  baseURL = "http://entregana.local/api";
  activeDeliveries: Array<Delivery> = [];
  completedDelivieries: Array<Delivery> = [];

  constructor(
    public http: HttpClient,
  ) { }

  retrieveDeliveries(completed: boolean = false): Promise<Array<Delivery>> {
    var url = `${this.baseURL}/deliveries/`
    if (completed) {
      url = `${url}completed/`
    }
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(
        (data: Array<Object>) => {
          const jsonConvert = new JsonConvert();
          const deliveries: Array<Delivery> = jsonConvert.deserializeArray(data, Delivery);
          if (completed) {
            this.completedDelivieries = deliveries;
          } else {
            this.activeDeliveries = deliveries;
          }
          resolve(deliveries);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  retrieveDeliveryHistory(id: String) {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.baseURL}/deliveries/${id}/history`).subscribe(
        (data: Array<Object>) => {
          const jsonConvert = new JsonConvert();
          const deliveries: Array<Delivery> = jsonConvert.deserializeArray(data, Delivery);
          resolve(deliveries);
        },
        error => {
          reject(error);
        }
      )
    })
  }

  createDelivery(data: Object): Promise<Delivery> {
    const jsonConvert = new JsonConvert();
    const deliveryForm = jsonConvert.deserializeObject(data, DeliveryForm);

    return new Promise((resolve, reject) => {
      this.http.post(`${this.baseURL}/deliveries/`, deliveryForm).subscribe(
        data => {
          const delivery = jsonConvert.deserializeObject(data, Delivery)
          this.activeDeliveries.push(delivery);
          resolve(delivery);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  updateDelivery(id: string, data: object): Promise<Delivery> {
    const jsonConvert = new JsonConvert();
    const deliveryForm = jsonConvert.deserializeObject(data, DeliveryForm);

    return new Promise((resolve, reject) => {
      this.http.patch(`${this.baseURL}/deliveries/${id}`, deliveryForm).subscribe(
        data => {
          const delivery = jsonConvert.deserializeObject(data, Delivery)
          this.activeDeliveries.push(delivery);
          resolve(delivery);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  completeDelivery(id: String) {
    return new Promise((resolve, reject) => {
      this.http.delete(`${this.baseURL}/deliveries/${id}/complete`).subscribe(
        data => resolve(data),
        error => reject(error)
      )
    })
  }
}
