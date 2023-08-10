import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of ,pipe} from 'rxjs';

import {
  addUser,
  addUserError,
  addUserSuccess,
  getAllUsers,
  getAllUsersError,
  getAllUsersSuccess,
} from './action.user';
import { UserService } from 'src/app/services/fire-base.service';
import { User } from 'src/app/models/user.model';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}
  //GET USER
  user$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllUsers),
    //   mergeMap(() =>
    //     this.userService.getAllUsers().pipe(
    //       map((users) => getAllUsersSuccess({ users })),
    //       catchError((error) => of(getAllUsersError({ error })))
    //     )
      )
    )
  ;

  //ADD USER
  adduser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addUser),
    //   mergeMap(({ user }) =>
    //     this.userService.addUser(user).pipe(
    //       map((user: User) => addUserSuccess({ user })),
    //       catchError((error) => of(addUserError({ error })))
    //     )
    //   )
    )
  );

  //UPDATE USER



  //DELETE USER
}
