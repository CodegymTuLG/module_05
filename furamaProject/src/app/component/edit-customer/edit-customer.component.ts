import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerServiceService} from '../../service/customer-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../module/customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  rfCustomer: FormGroup;
  customer: Customer;
  constructor(private customerService: CustomerServiceService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.customer = this.customerService.findById(id);
    });
    this.rfCustomer = new FormGroup({
      id: new FormControl(this.customer.id),
      name: new FormControl(this.customer.name, [Validators.required]),
      birthday: new FormControl(this.customer.birthday, [Validators.required]),
      sex: new FormControl(this.customer.sex, [Validators.required]),
      cardid: new FormControl(this.customer.cardid, [Validators.required]),
      phonenumber: new FormControl(this.customer.phonenumber, [Validators.required]),
      email: new FormControl(this.customer.email, [Validators.required]),
      address: new FormControl(this.customer.address, [Validators.required]),
      customerType: new FormControl(this.customer.customerType, [Validators.required])
    });
  }
  edit() {
    if (this.rfCustomer.invalid) {
      this.router.navigate(['/editcustomer']);
    } else {
      const id = +this.customer.id;
      this.customerService.edit(id, this.rfCustomer.value);
      this.router.navigate(['/listcustomer']);
    }
  }
}
