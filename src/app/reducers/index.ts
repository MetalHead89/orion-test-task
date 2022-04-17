import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {
  AuthenticationReducer,
  AuthenticationState,
} from './authentication/authentication.reducer';
import HeadOrganizationReducer, { HeadOrganizationState } from './head-organization/head-organization.reducer';

export interface State {
  authentication: AuthenticationState;
  headOrganizations: HeadOrganizationState;
}

export const reducers: ActionReducerMap<State> = {
  authentication: AuthenticationReducer,
  headOrganizations: HeadOrganizationReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
