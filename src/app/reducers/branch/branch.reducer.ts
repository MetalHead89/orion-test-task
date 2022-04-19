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

  )
);

export default BranchReducer;
export type { BranchState };
