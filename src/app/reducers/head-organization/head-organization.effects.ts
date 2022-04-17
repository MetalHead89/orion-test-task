import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import databaseServices from 'src/database/database-service';
import { load, save } from './head-organization.action';
import { HeadOrganizationState } from './head-organization.reducer';

@Injectable()
export class HeadOrganizationEffects {
  load$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(load),
        map(() => {
          const headOrganizations = databaseServices.getHeadOrganizations();
          this.store.dispatch(save({ organizations: headOrganizations }));
        })
      ),
    { dispatch: false }
  );

  constructor(
    private store: Store<HeadOrganizationState>,
    private actions$: Actions
  ) {}
}
