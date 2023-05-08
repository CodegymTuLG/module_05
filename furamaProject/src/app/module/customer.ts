import {CustomerType} from './customerType';

export interface Customer {
  id?: number;
  name?: string;
  birthday?: string;
  sex?: string;
  cardid?: string;
  phonenumber?: string;
  email?: string;
  address?: string;
  customerType?: CustomerType;
}
