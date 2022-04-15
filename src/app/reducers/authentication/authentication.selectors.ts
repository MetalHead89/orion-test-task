import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthenticationState } from './authentication.reducer';

export const selectAuthenticationFeature =
  createFeatureSelector<AuthenticationState>('authentication');

export const selectRole = createSelector(
  selectAuthenticationFeature,
  (state: AuthenticationState) => state.role
);

export const selectLogin = createSelector(
  selectAuthenticationFeature,
  (state: AuthenticationState) => state.login
);
