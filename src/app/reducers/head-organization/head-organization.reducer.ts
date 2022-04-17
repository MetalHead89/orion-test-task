import { createReducer, on } from '@ngrx/store';
import { HeadOrganization } from 'src/database/head-organization-bd';
import * as HeadOrganizationActions from './head-organization.action';

type HeadOrganizationState = HeadOrganization[];

const initialState: HeadOrganization[] = [];

const HeadOrganizationReducer = createReducer(
  initialState,
  on(
    HeadOrganizationActions.save,
    (state, { organizations }) => (state = organizations)
  )
);

export default HeadOrganizationReducer;
export type { HeadOrganizationState };
