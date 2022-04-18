import { createReducer, on } from '@ngrx/store';
import * as HomeActions from './home.action';

type OrganizationDisplayType = 'list' | 'tree';

type HomeState = {
  organizationDisplayType: OrganizationDisplayType;
  isOrganizationCard: boolean
};

const initialState: HomeState = {
  organizationDisplayType: 'list',
  isOrganizationCard: false,
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
);

export default HomeReducer;
export type { HomeState, OrganizationDisplayType };
