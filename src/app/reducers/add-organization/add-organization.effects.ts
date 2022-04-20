import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { addBranch } from '../branch/branch.action';
import { addHead } from '../head-organization/head-organization.action';
import { saveBranch, saveHeadOrganization, setOrganizationType } from './add-organization.actions';
import { AddOrganizationState } from './add-organization-reducer'

@Injectable()
export class AddOrganizationEffects {
  saveHead$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveHeadOrganization),
        map((action) => {
          this.store.dispatch(addHead({ payload: action.payload }));
          this.store.dispatch(setOrganizationType({ payload: { type: null } }));
        })
      ),
    { dispatch: false }
  );

  saveBranch$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveBranch),
        map((action) => {
          this.store.dispatch(addBranch({ payload: action.payload }));
          this.store.dispatch(setOrganizationType({ payload: { type: null } }));
        })
      ),
    { dispatch: false }
  );

  constructor(
    private store: Store<AddOrganizationState>,
    private actions$: Actions
  ) { }
}
