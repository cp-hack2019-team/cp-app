import { Component, OnInit } from '@angular/core';
import {User} from '../../_interfaces/user';
import {UserService} from '../user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  users: User[];

  constructor(
      public userService: UserService,
  ) {}

    ngOnInit() {
        // this.users$ = this.userService.getUsers();
        this.userService.getUsers().then(users => this.users = users);
    }
}
