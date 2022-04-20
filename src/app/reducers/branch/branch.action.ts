import { createAction, props } from '@ngrx/store';
import { Branch } from 'src/database/branch-bd';
import { HeadOrganization } from 'src/database/head-organization-bd';

export const loadBranches = createAction('[Branch] load');

export const saveBranches = createAction(
  '[Branch] save',
  props<{ organizations: Branch[] }>()
);

export const changeBranch = createAction(
  '[Branch] changeBranch',
  props<{ payload: Branch }>()
);

export const addBranch = createAction(
  '[Branch] Add Branch',
  props<{ payload: Branch }>()
);
