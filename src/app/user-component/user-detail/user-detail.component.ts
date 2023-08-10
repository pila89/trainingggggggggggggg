import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Route } from '@angular/router';
import { Store } from '@ngrx/store';
import { getUsersByname } from '../../store/users/selector.user';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  public user: User | undefined;
  
  ngOnInit(): void {
    const name: any = this.route.snapshot.paramMap.get('name');
    console.log(name);
    this.store.select(getUsersByname(name)).subscribe((user ) => {
      this.user = user[0]
    });

  }
  constructor(private route: ActivatedRoute, private store: Store<any>) {}

}
