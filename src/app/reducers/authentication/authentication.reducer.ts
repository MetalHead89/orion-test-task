import { createReducer, on } from "@ngrx/store"
import * as AuthenticationActions from './authentication.actions';

type Role = null | 'admin' | 'user'

type AuthenticationState = {
  role: Role,
  login: null | string
}

const initialState: AuthenticationState = {
  role: null,
  login: null
}

export const AuthenticationReducer = createReducer(initialState,
  on(AuthenticationActions.authentication, (state, { role, login }) => (
    { ...state, role: role, login: login })
  ));

export { AuthenticationState, Role }