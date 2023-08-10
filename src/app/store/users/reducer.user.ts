import { createReducer, on } from '@ngrx/store';
import {
  addUser,
  addUserError,
  addUserSuccess,
  getAllUsers,
  updateUser,
} from './action.user';
import { UserState } from './state.user';

export const initialUserState: UserState = {
  users: [],
  loading: false,
  error: false,
};

export const userReducer = createReducer(
  initialUserState,

  //ADD USER
  on(addUser, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(addUserSuccess, (state, { user }) => {
    return {
      ...state,
      users: [...state.users, user],
      loading: false,
    };
  }),
  on(addUserError, (state, { error }) => {
    return {
      ...state,
      loading:false,
      error:error
    };
  }),

  //UPDATE USER
  // on(updateUser, (state => ({
  //   ...state,
  //   users: [...state.users, user],
  // })),
  on(addUser, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  })),
  on(addUser, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  })),

  // GET USERS
  on(getAllUsers, (state) => ({
    ...state,
  })),
  on(addUser, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  })),
  on(addUser, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  })),

  // DELETE USER
  on(getAllUsers, (state) => ({
    ...state,
  })),
  on(addUser, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  })),
  on(addUser, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  }))
);
export function reducer(state: any, action: any) {
  return userReducer(state, action);
}
