import {Component, OnInit} from '@angular/core';
import {Student} from '../../module/student';
import {Studentstudentstudent} from '../../service/student-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  students: Student[];

  constructor(private studentService: Studentstudentstudent) {
  }

  ngOnInit(): void {
    this.studentService.findAll().subscribe(next => {
      this.students = next;
    });
  }

  search1(name: string) {
    return this.studentService.search( name).subscribe((result: any[]) => {
      this.students = result;
    });
  }

  search2(from: string, to: string) {
    return this.studentService.search2(from, to).subscribe((result: any[]) => {
      this.students = result;
    });
  }

  search3(name: string, score: string) {
    return this.studentService.search3(name, score).subscribe((result: any[]) => {
      this.students = result;
    });
  }
}
