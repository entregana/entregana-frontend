import {JsonObject, JsonProperty} from 'json2typescript';

import { Recipient } from './recipient';

@JsonObject
export class DeliveryForm {
  @JsonProperty('packageType')
  packageType: string = undefined;

  @JsonProperty('courier')
  courier: string = undefined;

  @JsonProperty('recipient')
  recipient: Recipient = undefined;

  @JsonProperty('otherDetails')
  otherDetails: any = undefined;

  @JsonProperty('status')
  status: string = undefined;
}
