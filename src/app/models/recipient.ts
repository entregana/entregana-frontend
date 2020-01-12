import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class Recipient {
  @JsonProperty('firstName')
  firstName: string = undefined;

  @JsonProperty('lastName')
  lastName: string = undefined;

  @JsonProperty('address')
  address: string = undefined;

  @JsonProperty('email')
  email: string = undefined;

  @JsonProperty('phone')
  phone: string = undefined;

  @JsonProperty('additionalDetails')
  additionalDetails: string = undefined;

  public get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
