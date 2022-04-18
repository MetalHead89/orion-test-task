import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from './home.reducer';

export const homeFeature = createFeatureSelector<HomeState>('home');

export const organizationDisplayTypeSelector = createSelector(
  homeFeature,
  (state: HomeState) => state.organizationDisplayType
);

export const isOrganizationCardSelector = createSelector(
  homeFeature,
  (state: HomeState) => state.isOrganizationCard
);
