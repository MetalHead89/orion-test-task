import { createReducer, on } from '@ngrx/store';
import * as AuthenticationActions from './authentication.actions';

type Role = null | 'admin' | 'user';

type AuthenticationState = {
  role: Role;
  login: null | string;
  name: null | string;
  surname: null | string;
};

const initialState: AuthenticationState = {
  role: null,
  login: null,
  name: null,
  surname: null,
};

export const AuthenticationReducer = createReducer(
  initialState,
  on(
    AuthenticationActions.authentication,
    (state, { role, login, name, surname }) => ({
      ...state,
      role,
      login,
      name,
      surname,
    })
  )
);

export { AuthenticationState, Role };
