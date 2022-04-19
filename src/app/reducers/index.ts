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
import OrganizationCardReducer, { OrganizationCardState } from './organization-card/organization-card.reducer';

export interface State {
  authentication: AuthenticationState;
  headOrganizations: HeadOrganizationState;
  branches: BranchState;
  home: HomeState;
  organizationCard: OrganizationCardState
}

export const reducers: ActionReducerMap<State> = {
  authentication: AuthenticationReducer,
  headOrganizations: HeadOrganizationReducer,
  branches: BranchReducer,
  home: HomeReducer,
  organizationCard: OrganizationCardReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
