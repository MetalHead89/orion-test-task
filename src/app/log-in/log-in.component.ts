import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import databaseFunctions, { UserData } from 'src/database/database-functions';
import { authentication } from '../reducers/authentication/authentication.actions';
import { AuthenticationState } from '../reducers/authentication/authentication.reducer';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  host: { class: 'log-in' },
  encapsulation: ViewEncapsulation.None,
})
export class LogInComponent implements OnInit {
  form: FormGroup;
  isAuthenticationFailed: boolean;
  router: Router;

  constructor(router: Router, private store: Store<AuthenticationState>) {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.isAuthenticationFailed = false;
    this.router = router;
  }

  submit() {
    const userData: UserData = databaseFunctions.login(this.form.value.login, this.form.value.password);

    if (userData !== null) {
      this.store.dispatch(authentication({ role: userData.role, login: userData.login }));
      this.router.navigate(['/']);
    } else {
      this.isAuthenticationFailed = true;
    }
  }

  ngOnInit(): void { }
}
