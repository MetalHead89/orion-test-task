import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import databaseServices from 'src/database/database-service';
import { loadBranches, saveBranches } from './branch.action';
import { BranchState } from './branch.reducer';

@Injectable()
export class BranchEffects {
  load$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadBranches),
        map(() => {
          const branches = databaseServices.getBranches();
          this.store.dispatch(saveBranches({ organizations: branches }));
        })
      ),
    { dispatch: false }
  );

  constructor(private store: Store<BranchState>, private actions$: Actions) {}
}
