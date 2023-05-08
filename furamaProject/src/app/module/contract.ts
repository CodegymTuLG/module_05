import {Customer} from './customer';
import {Employee} from './employee';
import {Facility} from './facility';

export interface Contract {
  id?: number;
  startdate?: string;
  enddate?: string;
  deposit?: string;
  employee?: Employee;
  customer?: Customer;
  service?: Facility;
  payment?: string;
}
