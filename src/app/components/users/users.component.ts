import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ConfirmationDialogService } from '../delete-confirmation/delete-confirmation.service';


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
  deletedMessage = '';
  constructor(private httpClient: HttpClient, private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.usersObservable = this.httpClient.get<HttpResponce>("https://reqres.in/api/users?page=1");
    this.usersObservable.subscribe(x => { this.users = x.data; });
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  public openConfirmationDialog(id) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this user ?')
      .then((confirmed) => {
        console.log('User confirmed:', id);
        this.httpClient.delete("https://reqres.in/api/users/" + id).subscribe(
          data => {
            this.deletedMessage = "User deleted successfully";
            this.usersObservable = this.httpClient.get<HttpResponce>("https://reqres.in/api/users?page=1");
            this.usersObservable.subscribe(x => { this.users = x.data; });
          },

          error => {

            console.log("Error", error);

          }
        )
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

}



