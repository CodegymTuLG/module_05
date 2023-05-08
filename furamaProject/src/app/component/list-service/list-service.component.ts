import {Component, OnInit} from '@angular/core';
import {Facility} from '../../module/facility';
import {FacilityServiceService} from '../../service/facility-service.service';
import {ServiceType} from '../../module/serviceType';
import {RentType} from '../../module/rentType';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  services: Facility[];
  serviceTypes: ServiceType[];
  rentTypes: RentType[];
  deleteId: number;
  constructor(private facilityService: FacilityServiceService) {
  }

  ngOnInit(): void {
    this.facilityService.findAll().subscribe(next => {
      this.services = next;
    });
    this.facilityService.serviceTypeSelect().subscribe(next => {
      this.serviceTypes = next;
    });
    this.facilityService.rentTypeSelect().subscribe( next => {
      this.rentTypes = next;
    });
  }

  search(name: string) {
    this.facilityService.search(name).subscribe((result: any[]) => {
      this.services = result;
    });
    // this.services = this.facilityService.showList();
    // }

  }
  search2(name: string, rentprice: string) {
    this.facilityService.search2(name, rentprice).subscribe((result: any[]) => {
      this.services = result;
    });
  }
  search3(name: string, rentpriceFrom: string, rentpriceTo: string) {
    this.facilityService.search3(name, rentpriceFrom, rentpriceTo).subscribe((result: any[]) => {
      this.services = result;
    });
  }

  search4(name: string, rentType: string) {
    this.facilityService.search4(name, rentType).subscribe((result: any[]) => {
      this.services = result;
    });
  }

  takeDeleteId(service: Facility) {
    this.deleteId = service.id;
  }

  delete(id: number) {
    this.facilityService.delete(id).subscribe( next => {
      this.ngOnInit();
    });
  }
}
