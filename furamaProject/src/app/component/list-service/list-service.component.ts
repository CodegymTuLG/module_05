import { Component, OnInit } from '@angular/core';

class Service {
  name: string;
  area: string;
  rentprice: string;
  maxperson: string;
  renttypeId: string;
  servicetypeId: string;
  standar: string;
  otherServiceDescription: string;
  poolArea: string;
  floor: string;
  freeService: string;
}

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  services: Service[];

  constructor() { }

  ngOnInit(): void {
  }

}
