import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './state.user';

const selectUserFeatureState = createFeatureSelector<UserState>('users');

export const getUsersSelector = createSelector(
  selectUserFeatureState,
  (state: UserState) => state.users
);

export const getUsersByname = (name: string) =>
  createSelector(selectUserFeatureState, (state: UserState) => {
    return state.users.filter((user) => user.name == name);
  });
