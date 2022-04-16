import { createAction, props } from '@ngrx/store';
import { Role } from './authentication.reducer';

export const authentication = createAction(
  '[Authentication] login',
  props<{ login: string; password: string }>()
);

export const authenticationFailed = createAction(
  '[Authentication] authenticationFailed',
  props<{ isAuthenticationFailed: boolean }>()
);

export const saveUserData = createAction(
  '[Authentication] saveUserData',
  props<{ role: Role; login: string; name: string; surname: string }>()
);
