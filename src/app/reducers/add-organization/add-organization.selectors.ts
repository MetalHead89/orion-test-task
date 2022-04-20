import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AddOrganizationState } from './add-organization-reducer';

export const addOrganizationFeature =
  createFeatureSelector<AddOrganizationState>('addOrganization');

export const organizationTypeSelector = createSelector(
  addOrganizationFeature,
  (state: AddOrganizationState) => state.organizationType
);
