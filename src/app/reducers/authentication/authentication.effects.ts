import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { UserData } from 'src/database/database-service';
import {
  authentication,
  authenticationFailed,
  logOut,
  saveUserData,
  setUserData,
  signOut,
} from './authentication.actions';
import { AuthenticationState } from './authentication.reducer';

@Injectable()
export class AuthenticationEffects {
  authentication$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authentication),
        map((action) => {
          const userData = this.authService.signIn(
            {
              login: action.login,
              password: action.password
            }
          );

          if (userData) {
            this.saveUserData(userData);
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

  setUserData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setUserData),
        map(() => {
          this.saveUserData(this.authService.getUserData());
        })
      ),
    { dispatch: false }
  );

  signOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logOut),
        map(() => {
          this.authService.signOut();
          this.store.dispatch(signOut());
        })
      ),
    { dispatch: false }
  );

  constructor(
    private store: Store<AuthenticationState>,
    private actions$: Actions,
    private authService: AuthService
  ) { }

  private saveUserData(userData: UserData): void {
    if (userData) {
      this.store.dispatch(
        saveUserData({
          role: userData.role,
          login: userData.login,
          name: userData.name,
          surname: userData.surname,
        })
      );
    }
  }
}
