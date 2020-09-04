import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  email: String;
  phone_number: String;
  password: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  myform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    phone_number: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  async resetPassword() {
    const value = {
      email: this.myform.get('email').value,
      phone_number: this.myform.get('phone_number').value,
      password: this.myform.get('password').value
    }

    let url = "http://localhost:3000/updateUserPassword";
    const result = await this.http.post(url, value).toPromise();

    if (result == '1') {
      this.router.navigate(['Signin']);
    } else {
      alert("Invalid Email or Phone Number");
    }


  }

}
