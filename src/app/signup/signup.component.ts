import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  email: any;
  cpassword: any;
  password: any;
  firstname: any;
  valid = false;
  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {}

  signup() {
    if (this.cpassword === this.password) {
      let body = {
        firstName: this.firstname,
        lastName: 'Singh',
        middleName: 'User',
        phoneNumber: '7894561230',
        email: this.email,
        address: 'pune',
        dateOfBirth: '2022-03-21',
        employeeNumber: '564',
        bloodGroup: 'A_POS',
        gender: 'MALE',
        password: this.password,
      };
      let url = 'http://localhost:3005/users';
      this.http.post(url, body).subscribe((response: any) => {
        console.log(response);
        this.router.navigate(['/login'])
        this.valid = true;
      });
    } else {
      alert('Please check yur password');
    }
  }
}
