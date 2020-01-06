import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Angular root component';
  public students = [];

  constructor(private studentsService: StudentsService) {

  }

  ngOnInit() {

    this.studentsService.getStudents().subscribe( data => this.students = data);

  }

}
