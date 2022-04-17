import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import {
  AuthenticationReducer,
  AuthenticationState,
} from './authentication/authentication.reducer';
import BranchReducer, { BranchState } from './branch/branch.reducer';
import HeadOrganizationReducer, {
  HeadOrganizationState,
} from './head-organization/head-organization.reducer';

export interface State {
  authentication: AuthenticationState;
  headOrganizations: HeadOrganizationState;
  branches: BranchState;
}

export const reducers: ActionReducerMap<State> = {
  authentication: AuthenticationReducer,
  headOrganizations: HeadOrganizationReducer,
  branches: BranchReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
