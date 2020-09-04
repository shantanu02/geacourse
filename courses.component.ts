import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('uid')) {
      this.router.navigate(['Courses']);
    } else {
      alert('Please Login ');
      this.router.navigate(['Home']);
    }
  }

  getjava() {
    this.router.navigate(['CourseDesc']);
  }

  getCpp() {
    this.router.navigate(['Cpp']);
  }

  getC() {
    this.router.navigate(['C']);
  }

  getDS() {
    this.router.navigate(['Ds']);
  }

  getMEAN() {
    this.router.navigate(['Mean']);
  }

  getAWP() {
    this.router.navigate(['Awp']);
  }

  getPython() {
    this.router.navigate(['Python']);
  }

  getDBT() {
    this.router.navigate(['Dbt']);
  }

  getCsharp() {
    this.router.navigate(['Csharp']);
  }

}
