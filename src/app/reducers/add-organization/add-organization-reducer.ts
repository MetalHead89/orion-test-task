import { createReducer, on } from '@ngrx/store';
import * as AddOrganizationActions from './add-organization.actions';

type OrganizationType = 'head' | 'branch' | null;

type AddOrganizationState = {
  organizationType: OrganizationType;
};

const initialState: AddOrganizationState = {
  organizationType: null
};

export const AddOrganizationReducer = createReducer(
  initialState,
  on(
    AddOrganizationActions.setOrganizationType,
    (state, { payload }) => ({
      ...state,
      organizationType: payload.type
    })
  )
);

export default AddOrganizationReducer;
export type { OrganizationType, AddOrganizationState };