import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  error = "";
  name = '';
  job = '';
  message = '';
  ngOnInit() { }
  addUser(name, job) {
    this.httpClient.post("https://reqres.in/api/users",
      {
        "name": name,
        "job": job
      })
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);

          this.name = '';
          this.job = '';
          this.message = "User added successfully"

        },
        error => {
          this.error = error.error.error;
          console.log("Error", error);
        }

      );
  }
}
