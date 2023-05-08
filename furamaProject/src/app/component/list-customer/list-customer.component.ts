import {Component, OnInit} from '@angular/core';
import {Customer} from '../../module/customer';
import {CustomerServiceService} from '../../service/customer-service.service';
import {CustomerType} from '../../module/customerType';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[];
  customerType: CustomerType[];

  constructor(private customerService: CustomerServiceService) {
  }

  ngOnInit(): void {
    this.customerService.findAll().subscribe(next => {
      this.customers = next;
      console.log(next);
    });
    this.customerService.customerTypeSelect().subscribe(next => {
      this.customerType = next;
    });
  }

}
