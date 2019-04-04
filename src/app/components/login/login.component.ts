import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) { }

  error = "";
  email = 'peter@klaven';
  password = 'cityslicka';
  ngOnInit() { }
  onLogin(email, password) {
    this.httpClient.post("https://reqres.in/api/login",
      {
        "email": email,
        "password": password
      })
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
          this.router.navigateByUrl('/users');
        },
        error => {
          this.error = error.error.error;
          console.log("Error", error);
        }

      );
  }
}
