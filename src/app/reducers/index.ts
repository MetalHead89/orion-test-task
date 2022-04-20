import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import AddOrganizationReducer, { AddOrganizationState } from './add-organization/add-organization-reducer';
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
  organizationCard: OrganizationCardState;
  addOrganization: AddOrganizationState;
}

export const reducers: ActionReducerMap<State> = {
  authentication: AuthenticationReducer,
  headOrganizations: HeadOrganizationReducer,
  branches: BranchReducer,
  home: HomeReducer,
  organizationCard: OrganizationCardReducer,
  addOrganization: AddOrganizationReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
