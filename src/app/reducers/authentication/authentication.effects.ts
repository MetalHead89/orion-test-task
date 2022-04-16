import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import databaseServices from 'src/database/database-service';
import {
  authentication,
  authenticationFailed,
  saveUserData,
} from './authentication.actions';
import { AuthenticationState } from './authentication.reducer';

@Injectable()
export class AuthenticationEffects {
  authentication$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authentication),
        map((action) => {
          const userData = databaseServices.login(
            action.login,
            action.password
          );

          if (userData) {
            this.store.dispatch(
              saveUserData({
                role: userData.role,
                login: userData.login,
                name: userData.name,
                surname: userData.surname,
              })
            );
          } else {
            this.store.dispatch(
              authenticationFailed({
                isAuthenticationFailed: true,
              })
            );
          }
        })
      ),
    { dispatch: false }
  );

  constructor(
    private store: Store<AuthenticationState>,
    private actions$: Actions
  ) {}
}
