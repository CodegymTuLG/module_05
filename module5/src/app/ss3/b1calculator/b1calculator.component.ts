import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b1calculator',
  templateUrl: './b1calculator.component.html',
  styleUrls: ['./b1calculator.component.css']
})
export class B1calculatorComponent implements OnInit {
  result: number;
  constructor() { }

  ngOnInit(): void {
  }

  sum(value: string, value2: string) {
    // tslint:disable-next-line:radix
    this.result = parseInt(value) + parseInt(value2);
  }
  apart(value: string, value2: string) {
    // tslint:disable-next-line:radix
    this.result = parseInt(value) - parseInt(value2);
  }
  multi(value: string, value2: string) {
    // tslint:disable-next-line:radix
    this.result = parseInt(value) * parseInt(value2);
  }
  dive(value: string, value2: string) {
    // tslint:disable-next-line:radix
    this.result = parseInt(value) / parseInt(value2);
  }
}
