import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

// export interface AddUserProps {
//   user: User;
// }

// GET USERS

export const getAllUsers = createAction(' [User] Get All Users');
export const getAllUsersSuccess = createAction(
  ' [Users] Get All Users Success',
  props<{ users: User[] }>()
);
export const getAllUsersError = createAction(
  ' [Users] Get All Users Error',
  props<{ error: string }>()
);

// ADD USER

export const addUser = createAction(
  '[User] Add User',

  props<{ user: User }>()
);
export const addUserSuccess = createAction(
  '[User] Add User Sucess',

  props<{ user: User }>()
);
export const addUserError = createAction(
  '[User] Add User Error',

  props<{ error: string }>()
);

// UPDATE USER

export const updateUser = createAction(
  '[User]Update User',

  props<{ user: User }>()
);
export const updateUserSuccess = createAction(
  '[User]Update User Sucess',

  props<{ user: User }>()
);
export const updateUserError = createAction(
  '[User]Update User Error',

  props<{ error: string }>()
);

//DELETE USER

export const deleteUser = createAction(
  ' [User] Delete User',
  props<{ users: User }>()
);
export const deleteUserSuccess = createAction(
  ' [User] Delete User Success',
  props<{ users: User}>()
);
export const deleteUserError = createAction(
  ' [User] Delete User Error',
  props<{ error: string }>()
);
