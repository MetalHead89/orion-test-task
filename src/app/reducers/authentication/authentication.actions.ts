import { createAction, props } from '@ngrx/store';
import { Role } from './authentication.reducer';

export const authentication = createAction(
  '[Authentication] login',
  props<{ login: string; password: string }>()
);

export const signOut = createAction(
  '[Authentication] sign out'
);

export const logOut = createAction(
  '[Authentication] log out'
);

export const authenticationFailed = createAction(
  '[Authentication] authenticationFailed',
  props<{ isAuthenticationFailed: boolean }>()
);

export const setUserData = createAction(
  '[Authentication] Set user data'
);

export const saveUserData = createAction(
  '[Authentication] saveUserData',
  props<{ role: Role; login: string; name: string; surname: string }>()
);
