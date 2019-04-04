import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


class User {

  id: number;
  avatar: string;
  first_name: string;
  last_name: string;

}
class HttpResponce {

  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[]

}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersObservable: Observable<HttpResponce>;

  selectedUser: User;
  users: User[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.usersObservable = this.httpClient.get<HttpResponce>("https://reqres.in/api/users?page=1");
    this.usersObservable.subscribe(x => { this.users = x.data; });
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }
}


