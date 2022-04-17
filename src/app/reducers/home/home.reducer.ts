import { createReducer, on } from '@ngrx/store';
import * as HomeActions from './home.action';

type OrganizationDisplayType = 'list' | 'tree';

type HomeState = {
  organizationDisplayType: OrganizationDisplayType;
};

const initialState: HomeState = {
  organizationDisplayType: 'list',
};

const HomeReducer = createReducer(
  initialState,
  on(HomeActions.switchDisplayType, (state, { displayType }) => ({
    ...state,
    organizationDisplayType: displayType,
  }))
);

export default HomeReducer;
export type { HomeState, OrganizationDisplayType };
