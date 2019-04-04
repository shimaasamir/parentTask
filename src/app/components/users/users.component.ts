import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Users } from '../../users';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = Users;
  selectedUser: User;

  constructor() { }

  ngOnInit() {

  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
