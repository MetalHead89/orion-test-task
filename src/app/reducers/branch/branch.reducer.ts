import { createReducer, on } from '@ngrx/store';
import { Branch } from 'src/database/branch-bd';
import * as BranchActions from './branch.action';

type BranchState = Branch[];

const initialState: BranchState = [];

const BranchReducer = createReducer(
  initialState,
  on(
    BranchActions.saveBranches,
    (state, { organizations }) => (state = organizations)
  ),
  on(
    BranchActions.changeBranch,
    (state, { payload }) => [...state.map(branch => branch.id === payload.id ? payload : branch)]

  ),
  on(
    BranchActions.addBranch,
    (state, { payload }) => [...state, { ...payload, id: getID(state) }]
  )
);

const getID = (state: BranchState): number => {
  let id = generateID();

  while (!idIsUnique(state, id)) {
    id = generateID();
  }

  return id;
}

const idIsUnique = (state: BranchState, id: number): boolean => {
  return state.some(branch => branch.id !== id)
}

const generateID = (): number => {
  return Math.floor(Math.random() * (10000000 - 1000000) + 1000000);
}

export default BranchReducer;
export type { BranchState };
