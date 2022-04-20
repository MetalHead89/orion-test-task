import { createAction, props } from '@ngrx/store';
import { Branch } from 'src/database/branch-bd';
import { HeadOrganization } from 'src/database/head-organization-bd';
import { OrganizationType } from './add-organization-reducer';

export const setOrganizationType = createAction(
  '[Add organization] Set organization type',
  props<{ payload: { type: OrganizationType } }>()
);

export const saveHeadOrganization = createAction(
  '[Add Organization] Save head organization',
  props<{ payload: HeadOrganization }>()
);

export const saveBranch = createAction(
  '[Add Organization] Save branch organization',
  props<{ payload: Branch }>()
);
