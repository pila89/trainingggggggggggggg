import { Injectable } from '@angular/core';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersRef!: AngularFireList<any>;
  userRef!: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}
  // //   constructor(private xx: AngularFirestore) {}

  addUser(user: User): void {
    this.usersRef.push({
      name: user.name,
      vorname: user.vorname,
      email: user.email,
      phone: user.phone,
    });
  }

  getAllUsers() {
    this.usersRef = this.db.list('users');
    return this.usersRef;
  }

  updateUser(){

  }

  deleteUser(){

  }
}
