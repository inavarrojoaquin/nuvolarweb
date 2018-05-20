import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: any;
  username: string;

  constructor(private userService: UserService) { }

  ngOnInit() { }

  getUsers(username: string): void {
    this.userService.getUsers(username)
      .subscribe(users => this.users = users.items);
  }

  changeTheme(colorName: string): void {
      // $(document.body).removeClass().toggleClass(`theme-${colorName}`);
    }
}
