import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string;
  password: string;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  myform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),

    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  async readData() {
    const value = {
      email: this.myform.get('email').value,
      password: this.myform.get('password').value,
    }

    const url = "http://localhost:3000/readuser";
    const result = await this.http.post(url, value).toPromise();

    if (result == '1') {
      sessionStorage.setItem('uid', 'true');
      this.router.navigate(['Courses']);

    } else {

      alert("Wrong credentials");
    }

  }

  goToPage(page) {
    this.router.navigate([page]);
  }



}
