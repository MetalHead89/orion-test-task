import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthenticationState } from './authentication.reducer';

export const authenticationFeature =
  createFeatureSelector<AuthenticationState>('authentication');

export const roleSelector = createSelector(
  authenticationFeature,
  (state: AuthenticationState) => state.role
);

export const loginSelector = createSelector(
  authenticationFeature,
  (state: AuthenticationState) => state.login
);

export const fullNameSelector = createSelector(
  authenticationFeature,
  (state: AuthenticationState) =>
    state.name && state.surname ? `${state.name} ${state.surname}` : null
);

export const authenticationFailedSelector = createSelector(
  authenticationFeature,
  (state: AuthenticationState) => state.isAuthenticationFailed
);
