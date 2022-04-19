import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { changeBranch } from '../branch/branch.action';
import { changeHead } from '../head-organization/head-organization.action';
import { disableEditMode, saveBranch, saveHeadOrganization } from './organization-card.action';
import { OrganizationCardState } from './organization-card.reducer';

@Injectable()
export class OrganizationCardEffects {
  saveHead$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveHeadOrganization),
        map((action) => {
          this.store.dispatch(changeHead({ payload: action.payload }));
          this.store.dispatch(disableEditMode());
        })
      ),
    { dispatch: false }
  );

  saveBranch$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveBranch),
        map((action) => {
          // console.dir(action.payload)
          this.store.dispatch(changeBranch({ payload: action.payload }));
          this.store.dispatch(disableEditMode());
        })
      ),
    { dispatch: false }
  );

  constructor(
    private store: Store<OrganizationCardState>,
    private actions$: Actions
  ) { }
}
