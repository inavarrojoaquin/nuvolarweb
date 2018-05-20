import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  selectedUser: User;

  user: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.getUsers();
  }

}
