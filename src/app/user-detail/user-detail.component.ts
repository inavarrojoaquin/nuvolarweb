import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: any;
  username: string;
  repos: any;
  followers: any;
  followings: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.initilize();
  }

  initilize(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    this.getUser();
    this.getRepositories();
    this.getFollowers();
    this.getFollowings();
  }

  getUser(): void {
    this.userService.getUser(this.username)
      .subscribe(res => this.user = res);
  }
  getRepositories(): void {
    this.userService.getRepositories(this.username)
      .subscribe(res => this.repos = res);
  }
  getFollowers(): void {
    this.userService.getFollowers(this.username)
      .subscribe(res => this.followers = res);
  }
  getFollowings(): void {
    this.userService.getFollowings(this.username)
      .subscribe(res => this.followings = res);
  }

  goBack(): void {
    this.location.back();
  }

}
