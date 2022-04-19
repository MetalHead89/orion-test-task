import { createAction, props } from '@ngrx/store';
import { OrganizationData, OrganizationDisplayType } from './home.reducer';

export const switchDisplayType = createAction(
  '[Home] Switch display type organization',
  props<{ displayType: OrganizationDisplayType }>()
);

export const showOrganizationCard = createAction(
  '[Home] Show organization card'
);

export const closeOrganizationCard = createAction(
  '[Home] Close organization card'
);

export const setActiveOrganization = createAction(
  '[Home] Set active organization',
  props<{ organizationData: OrganizationData }>()
);
