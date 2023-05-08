import {Component, OnInit} from '@angular/core';
import {CustomerServiceService} from '../../service/customer-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Facility} from '../../module/facility';
import {FacilityServiceService} from '../../service/facility-service.service';
import {RentType} from '../../module/rentType';
import {ServiceType} from '../../module/serviceType';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  rfService: FormGroup;
  service: Facility;
  id: number;
  rentTypes: RentType[];
  serviceTypes: ServiceType[];

  constructor(private facilityService: FacilityServiceService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.facilityService.rentTypeSelect().subscribe(next => {
      this.rentTypes = next;
    });
    this.facilityService.serviceTypeSelect().subscribe(next => {
      this.serviceTypes = next;
    });
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
    });
    this.facilityService.findById(this.id).subscribe((item) => {
      this.service = item;
      this.rfService = new FormGroup({
        id: new FormControl(this.service.id),
        name: new FormControl(this.service.name, [Validators.required]),
        area: new FormControl(this.service.area, [Validators.required]),
        rentprice: new FormControl(this.service.rentprice, [Validators.required]),
        maxperson: new FormControl(this.service.maxperson, [Validators.required]),
        rentType: new FormControl(this.rentTypes.filter(i => i.id === this.service.rentType.id)[0], [Validators.required]),
        serviceType: new FormControl(this.serviceTypes.filter(i => i.id === this.service.serviceType.id)[0], [Validators.required]),
        standar: new FormControl(this.service.standar, [Validators.required]),
        otherServiceDescription: new FormControl(this.service.otherServiceDescription, [Validators.required]),
        poolArea: new FormControl(this.service.poolArea, [Validators.required]),
        floor: new FormControl(this.service.floor, [Validators.required]),
        freeService: new FormControl(this.service.freeService, [Validators.required])
      });
    });

  }

  edit() {
    if (this.rfService.invalid) {
      this.router.navigate(['/editservice']);
    } else {
      const id = +this.service.id;
      this.facilityService.edit(id, this.rfService.value).subscribe();
      this.router.navigate(['/listservice']);
    }
  }
}
