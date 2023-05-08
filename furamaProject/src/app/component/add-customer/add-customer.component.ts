import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from '../../module/customer';
import {CustomerServiceService} from '../../service/customer-service.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  rfCustomer: FormGroup;

  constructor(private customerService: CustomerServiceService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.rfCustomer = new FormGroup({
      name: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      sex: new FormControl('', [Validators.required]),
      cardid: new FormControl('', [Validators.required]),
      phonenumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required])
    });
  }

  save() {
    if (this.rfCustomer.invalid) {
      this.router.navigate(['/addcustomer']);
    } else {
      this.customerService.save(this.rfCustomer.value);
      this.router.navigate(['/listcustomer']);
    }
  }
}
