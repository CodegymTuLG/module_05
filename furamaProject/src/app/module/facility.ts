import {RentType} from './rentType';
import {ServiceType} from './serviceType';

export interface Facility {
  id?: number;
  name?: string;
  area?: string;
  rentprice?: string;
  maxperson?: string;
  rentType?: RentType;
  serviceType?: ServiceType;
  standar?: string;
  otherServiceDescription?: string;
  poolArea?: string;
  floor?: string;
  freeService?: string;
}
