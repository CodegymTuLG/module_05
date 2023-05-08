import {Component, OnInit} from '@angular/core';
import {CustomerServiceService} from '../../service/customer-service.service';
import {Router} from '@angular/router';
import {FacilityServiceService} from '../../service/facility-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../../module/rentType';
import {ServiceType} from '../../module/serviceType';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  rfService: FormGroup;
  rentTypes: RentType[];
  serviceTypes: ServiceType[];

  constructor(private facilityService: FacilityServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.facilityService.rentTypeSelect().subscribe(next => {
      this.rentTypes = next;
    });

    this.facilityService.serviceTypeSelect().subscribe(next => {
      this.serviceTypes = next;
    });

    this.rfService = new FormGroup({
      name: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      rentprice: new FormControl('', [Validators.required]),
      maxperson: new FormControl('', [Validators.required]),
      rentType: new FormControl('', [Validators.required]),
      serviceType: new FormControl('', [Validators.required]),
      standar: new FormControl('', [Validators.required]),
      otherServiceDescription: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required]),
      floor: new FormControl('', [Validators.required]),
      freeService: new FormControl('', [Validators.required])
    });
  }

  save() {
    if (this.rfService.invalid) {
      this.router.navigate(['/addservice']);
    } else {
      this.facilityService.save(this.rfService.value).subscribe();
      this.router.navigate(['/listservice']);
    }
  }

}
