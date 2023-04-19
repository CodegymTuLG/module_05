import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  rfUser: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.rfUser = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, this.checkAge]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
    }, {validators: this.checkSameInput});
  }

  private checkSameInput(control: AbstractControl): Validators | null {
    const confirmPassword = control.get('confirmPassword');
    const password = control.get('password');
    if (!(password && confirmPassword && password.value === confirmPassword.value)) {
      return {notSame: true};
    }
    return null;
  }

  private checkAge(control: AbstractControl) {
    // tslint:disable-next-line:variable-name
    const age = control.value;
    if (age < 18) {
      return {invalidAge: true};
    }
    return null;
  }
}
