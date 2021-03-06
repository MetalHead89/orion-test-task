import { createAction, props } from '@ngrx/store';
import { HeadOrganization } from 'src/database/head-organization-bd';

export const load = createAction('[Head Organization] load');

export const save = createAction(
  '[Head Organization] save',
  props<{ organizations: HeadOrganization[] }>()
);

export const changeHead = createAction(
  '[Head Organization] changeHead',
  props<{ payload: HeadOrganization }>()
);

export const addHead = createAction(
  '[Head Organization] Add Head',
  props<{ payload: HeadOrganization }>()
);
