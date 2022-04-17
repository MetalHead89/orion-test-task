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
import HomeReducer, { HomeState } from './home/home.reducer';

export interface State {
  authentication: AuthenticationState;
  headOrganizations: HeadOrganizationState;
  branches: BranchState;
  home: HomeState;
}

export const reducers: ActionReducerMap<State> = {
  authentication: AuthenticationReducer,
  headOrganizations: HeadOrganizationReducer,
  branches: BranchReducer,
  home: HomeReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
