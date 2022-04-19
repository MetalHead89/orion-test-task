import { createAction, props } from '@ngrx/store';
import { Branch } from 'src/database/branch-bd';
import { HeadOrganization } from 'src/database/head-organization-bd';

export const enableEditMode = createAction(
  '[Organization card] Enable edit mode'
);

export const disableEditMode = createAction(
  '[Organization card] Disable edit mode'
);

export const saveHeadOrganization = createAction(
  '[Organization card] Save head organization',
  props<{ payload: HeadOrganization }>()
);

export const saveBranch = createAction(
  '[Organization card] Save head organization',
  props<{ payload: Branch }>()
);
