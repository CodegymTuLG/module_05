import { Component, OnInit } from '@angular/core';
import {Contract} from '../../module/contract';
import {ContractServiceService} from '../../service/contract-service.service';
import {Employee} from '../../module/employee';

class ContractService {
}

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contracts: Contract[];
  employees: Employee[];
  constructor(private contractService: ContractServiceService) { }

  ngOnInit(): void {
    this.contractService.findAll().subscribe(next => {
      this.contracts = next;
    });
    this.contractService.employeeList().subscribe(next => {
      this.employees = next;
    });
  }

}
