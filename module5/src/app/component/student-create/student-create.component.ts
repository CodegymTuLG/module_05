import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../../module/student';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  student: Student;
  @Output() onCreate = new EventEmitter<Student>();
  constructor() { }

  ngOnInit(): void {
  }

  saveStudent(name: string, phoneNumber: string, address: string, img: string) {
    this.student = {
      id: 0,
      name,
      phoneNumber,
      address,
      img
    };
    this.onCreate.emit(this.student);
  }
  resetForm() {
    this.student = {
      id: 0,
      name: '',
      phoneNumber: '',
      address: '',
      img: ''
    };
  }
}
