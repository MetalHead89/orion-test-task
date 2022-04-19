import { createReducer, on } from '@ngrx/store';
import { Branch } from 'src/database/branch-bd';
import { HeadOrganization } from 'src/database/head-organization-bd';
import * as HomeActions from './home.action';

type OrganizationData = HeadOrganization | Branch | null;

type OrganizationDisplayType = 'list' | 'tree';

type HomeState = {
  organizationDisplayType: OrganizationDisplayType;
  isOrganizationCard: boolean
  activeOrganization: OrganizationData;
};

const initialState: HomeState = {
  organizationDisplayType: 'list',
  isOrganizationCard: false,
  activeOrganization: null
};

const HomeReducer = createReducer(
  initialState,
  on(HomeActions.switchDisplayType, (state, { displayType }) => ({
    ...state,
    organizationDisplayType: displayType,
  })),
  on(HomeActions.showOrganizationCard, (state) => ({
    ...state,
    isOrganizationCard: true,
  })),
  on(HomeActions.closeOrganizationCard, (state) => ({
    ...state,
    isOrganizationCard: false,
  })),
  on(HomeActions.setActiveOrganization, (state, { organizationData }) => ({
    ...state,
    activeOrganization: organizationData,
  })),
);

export default HomeReducer;
export type { HomeState, OrganizationDisplayType, OrganizationData };
