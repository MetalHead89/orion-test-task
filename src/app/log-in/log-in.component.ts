import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authentication } from '../reducers/authentication/authentication.actions';
import {
  AuthenticationState,
  Role,
} from '../reducers/authentication/authentication.reducer';
import {
  authenticationFailedSelector,
  roleSelector,
} from '../reducers/authentication/authentication.selectors';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  host: { class: 'log-in' },
  encapsulation: ViewEncapsulation.None,
})
export class LogInComponent {
  form: FormGroup;

  role$ = this.store.select(roleSelector);
  role: Role = null;

  isAuthenticationFailed$ = this.store.select(authenticationFailedSelector);
  isAuthenticationFailed: boolean = false;

  constructor(
    private router: Router,
    private store: Store<AuthenticationState>
  ) {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    this.role$.subscribe((roleSelector) => {
      if (roleSelector) {
        this.router.navigate(['/']);
      }
    });

    this.isAuthenticationFailed$.subscribe((authenticationFailedSelector) => {
      this.isAuthenticationFailed = authenticationFailedSelector;
    });
  }

  submit() {
    this.store.dispatch(
      authentication({
        login: this.form.value.login,
        password: this.form.value.password,
      })
    );
  }
}
