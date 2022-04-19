import { createReducer, on } from '@ngrx/store';
import * as OrganizationCardActions from './organization-card.action';

type OrganizationCardState = {
  isEditingEnabled: boolean;
};

const initialState: OrganizationCardState = {
  isEditingEnabled: false
};

const OrganizationCardReducer = createReducer(
  initialState,
  on(OrganizationCardActions.enableEditMode, state => ({
    ...state,
    isEditingEnabled: true,
  })),
  on(OrganizationCardActions.disableEditMode, state => ({
    ...state,
    isEditingEnabled: false,
  }))
);

export default OrganizationCardReducer;
export type { OrganizationCardState };
