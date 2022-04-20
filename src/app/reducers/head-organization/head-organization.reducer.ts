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
  ),
  on(
    HeadOrganizationActions.changeHead,
    (state, { payload }) => [...state.map(head => head.id === payload.id ? payload : head)]
  ),
  on(
    HeadOrganizationActions.addHead,
    (state, { payload }) => [...state, { ...payload, id: getID(state) }]
  )
);

const getID = (state: HeadOrganizationState): number => {
  let id = generateID();

  while (!idIsUnique(state, id)) {
    id = generateID();
  }

  return id;
}

const idIsUnique = (state: HeadOrganizationState, id: number): boolean => {
  return state.some(head => head.id !== id)
}

const generateID = (): number => {
  return Math.floor(Math.random() * (10000000 - 1000000) + 1000000);
}

export default HeadOrganizationReducer;
export type { HeadOrganizationState };
