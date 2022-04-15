import { createAction, props } from '@ngrx/store';
import { Role } from './authentication.reducer';

export const authentication = createAction(
  '[Login Page] Login',
  props<{ role: Role; login: string; name: string; surname: string }>()
);
