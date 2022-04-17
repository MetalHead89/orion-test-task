import { createAction, props } from '@ngrx/store';
import { HeadOrganization } from 'src/database/head-organization-bd';

export const load = createAction('[Head Organization] load');

export const save = createAction(
  '[Head Organization] save',
  props<{ organizations: HeadOrganization[] }>()
);
