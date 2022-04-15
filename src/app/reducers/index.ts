import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthenticationReducer, AuthenticationState } from './authentication/authentication.reducer';

export interface State {
  authentication: AuthenticationState
}

export const reducers: ActionReducerMap<State> = {
  authentication: AuthenticationReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
