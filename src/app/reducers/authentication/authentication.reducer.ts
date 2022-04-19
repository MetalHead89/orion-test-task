import { createReducer, on } from '@ngrx/store';
import * as AuthenticationActions from './authentication.actions';

type Role = null | 'admin' | 'user';

type AuthenticationState = {
  role: Role;
  login: null | string;
  name: null | string;
  surname: null | string;
  isAuthenticationFailed: boolean;
};

const initialState: AuthenticationState = {
  role: null,
  login: null,
  name: null,
  surname: null,
  isAuthenticationFailed: false,
};

export const AuthenticationReducer = createReducer(
  initialState,
  on(
    AuthenticationActions.saveUserData,
    (state, { role, login, name, surname }) => ({
      ...state,
      role,
      login,
      name,
      surname,
    })
  ),
  on(AuthenticationActions.signOut, (state) => (state =
  {
    role: null,
    login: null,
    name: null,
    surname: null,
    isAuthenticationFailed: false,
  })),
  on(AuthenticationActions.authenticationFailed, (state) => ({
    ...state,
    isAuthenticationFailed: true,
  }))
);

export { AuthenticationState, Role };
