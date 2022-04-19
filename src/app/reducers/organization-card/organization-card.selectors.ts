import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrganizationCardState } from './organization-card.reducer';

export const OrganizationCardFeature =
  createFeatureSelector<OrganizationCardState>('organizationCard');

export const isEditingEnabledSelector = createSelector(
  OrganizationCardFeature,
  (state: OrganizationCardState) => state.isEditingEnabled
);
