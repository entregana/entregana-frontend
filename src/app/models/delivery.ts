import {JsonObject, JsonProperty} from 'json2typescript';

import { Recipient } from './recipient';
import { RecordType } from '../enums/recordType';

@JsonObject
export class Delivery {
  @JsonProperty('id')
  id: string = undefined;

  @JsonProperty('packageType')
  packageType: string = undefined;

  @JsonProperty('sender')
  sender: string = undefined;

  @JsonProperty('courier')
  courier: string = undefined;

  @JsonProperty('recipient', Recipient)
  recipient: Recipient = undefined;

  @JsonProperty('otherDetails')
  otherDetails: any = undefined;

  @JsonProperty('status')
  status: string = undefined;

  @JsonProperty('modifiedAt')
  modifiedAt: Date = undefined;

  @JsonProperty('type')
  type: RecordType = undefined;

  public static get packateTypes() {
    return [
      { value: 'documents', label: 'Documents' },
      { value: 'pallets', label: 'Pallets' },
      { value: 'parcels', label: 'Parcels' }
    ];
  }

  public get isHistorical() {
    return this.type == RecordType.HISTORICAL;
  }

  public get isCurrent() {
    return !this.isHistorical
  }
}
