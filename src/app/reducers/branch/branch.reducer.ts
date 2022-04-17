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
  )
);

export default BranchReducer;
export type { BranchState };
