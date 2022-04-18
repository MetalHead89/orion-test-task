import { createAction, props } from '@ngrx/store';
import { OrganizationDisplayType } from './home.reducer';

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
