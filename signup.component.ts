import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // email: string;
  // username: string;
  // password: string;
  // confirmPassword: string;
  // first_name: string;
  // last_name: string;
  // phone_number: string;

  myFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    first_name: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]{2,}'), Validators.minLength(2)]),
    last_name: new FormControl(),
    phone_number: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(10)])


  })

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  async registerUser() {
    console.log(this.myFormGroup.get('password').value);
    console.log(this.myFormGroup.get('confirmPassword').value);

    if (this.myFormGroup.get('password').value == this.myFormGroup.get('confirmPassword').value) {
      const value = {
        email: this.myFormGroup.get('email').value,
        username: this.myFormGroup.get('username').value,
        password: this.myFormGroup.get('password').value,
        first_name: this.myFormGroup.get('first_name').value,
        last_name: this.myFormGroup.get('last_name').value,
        phone_number: this.myFormGroup.get('phone_number').value

      };

      const urll = "http://localhost:3000/readuser1";
      const avail = await this.http.post(urll, value).toPromise();
      console.log(avail);
      if (avail == '1') {
        const url = "http://localhost:3000/adduser";
        const response = await this.http.post(url, value).toPromise();
        this.router.navigate(['Signin']);
      } else {
        alert("Email already registered!!!");
        window.location.reload();
      }


    } else {
      alert("Please match the Password");
    }




  }


}
