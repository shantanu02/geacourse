import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Router } from '@angular/router';
import { JitEvaluator } from '@angular/compiler';

@Component({
  selector: 'app-coursedesc',
  templateUrl: './coursedesc.component.html',
  styleUrls: ['./coursedesc.component.css']
})
export class CoursedescComponent implements OnInit {

  c: any;
  name: string = "java";

  //@Output() change = new EventEmitter();


  constructor(private http: HttpClient, private router: Router) { }

  async ngOnInit(): Promise<void> {

    if (sessionStorage.getItem('uid') == 'true') {
      const items = await this.http.get('http://localhost:3000/readCourse').toPromise();
      this.c = items;
      console.log(items);
      console.log(this.c[0].cname);
    } else {
      alert('Please Login ');
      this.router.navigate(['Signin']);
    }


  }

  goToPage(page) {
    alert("Thank You For buying Java Course! Happy Learning ")
    this.router.navigate([page]);
  }

  // addjava() {
  //   console.log("hello");
  //   this.change.emit(this.name);
  // }


}
