import {Component, OnInit} from '@angular/core';
import {Facility} from '../../module/facility';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  services: Facility[];

  constructor() {
  }

  ngOnInit(): void {
    this.services = [
      {
        id: '1',
        name: 'Villa Beach Front',
        area: '25000',
        rentprice: '1000000',
        maxperson: '10',
        renttypeId: 'Day',
        servicetypeId: 'Villa',
        standar: 'vip',
        otherServiceDescription: 'Có hồ bơi',
        poolArea: '500',
        floor: '4',
        freeService: '1 Xe máy'
      },
      {
        id: '2',
        name: 'House Princess 02',
        area: '10000',
        rentprice: '4000000',
        maxperson: '2',
        renttypeId: 'mounth',
        servicetypeId: 'House',
        standar: 'normal',
        otherServiceDescription: 'Có hồ bơi',
        poolArea: '300',
        floor: '1',
        freeService: 'Có tivi'
      }
    ];
  }

}
