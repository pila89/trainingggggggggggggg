import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { getUsersSelector } from '../../store/users/selector.user';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { getAllUsers } from 'src/app/store/users/action.user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  public users: User[] = [];

  constructor(private store: Store<any>, private router: Router) {}
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    // this.store.dispatch(getAllUsers);
    this.store.select(getUsersSelector).subscribe((users) => {
      this.users = users;
    });
  }

  getDetailUser(name: string) {
    this.router.navigate([`detail-user/${name}`]);
  }
  
  deleteDetailUser(){
    
  }
}
