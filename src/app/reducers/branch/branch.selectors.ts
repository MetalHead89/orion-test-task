import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BranchState } from './branch.reducer';

export const BranchesFeature =
  createFeatureSelector<BranchState>('headOrganizations');

export const branchesSelector = createSelector(
  BranchesFeature,
  (state: BranchState) => state
);
