import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeadOrganizationState } from './head-organization.reducer';

export const headOrganizationsFeature =
  createFeatureSelector<HeadOrganizationState>('headOrganizations');

export const headOrganizationsSelector = createSelector(
  headOrganizationsFeature,
  (state: HeadOrganizationState) => state
);
