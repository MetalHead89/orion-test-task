import { createAction, props } from '@ngrx/store';
import { Branch } from 'src/database/branch-bd';

export const loadBranches = createAction('[Branch] load');

export const saveBranches = createAction(
  '[Branch] save',
  props<{ organizations: Branch[] }>()
);
