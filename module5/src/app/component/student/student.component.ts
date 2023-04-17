import { Component, OnInit } from '@angular/core';
import {Student} from '../../module/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[];
  studentDetail: Student;
  constructor() { }

  ngOnInit(): void {
    this.students = [
      {
        id: 1,
        name: 'Harry',
        phoneNumber: '090508111',
        address: 'Đà Nẵng',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/1920px-Harry_Potter_wordmark.svg.png'
      },
      {
        id: 2,
        name: 'Ron',
        phoneNumber: '090508222',
        address: 'Quảng Nam',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/1920px-Harry_Potter_wordmark.svg.png'
      },
      {
        id: 3,
        name: 'Hermione',
        phoneNumber: '090508333',
        address: 'Huế',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/1920px-Harry_Potter_wordmark.svg.png'
      }
    ];
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  showDetail(student: Student) {
    this.studentDetail = student;
  }
}
