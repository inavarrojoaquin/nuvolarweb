import { Component, OnInit, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: User[];
  username: string;
  classes = ['dark-theme', 'app-theme', 'light-theme'];

  @HostBinding('class') componentCssClass;

  constructor(
    private userService: UserService,
    public overlayContainer: OverlayContainer) { }

  ngOnInit() { }

  getUsers(username: string): void {
    this.userService.getUsers(username)
      .subscribe(users => this.users = users.items as User[]);
  }

  onSetTheme(theme) {
    const body = document.body.classList;

    if (body.contains(this.classes[0])) {
      body.remove(this.classes[0]);
      body.add(theme);
    } else if (body.contains(this.classes[1])) {
      body.remove(this.classes[1]);
      body.add(theme);
    } else if (this.classes[2]) {
      body.remove(this.classes[2]);
      body.add(theme);
    } else {
      body.add(theme);
    }
  }
}
