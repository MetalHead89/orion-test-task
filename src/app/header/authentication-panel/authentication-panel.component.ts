import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logOut, setUserData, signOut } from 'src/app/reducers/authentication/authentication.actions';
import { AuthenticationState } from 'src/app/reducers/authentication/authentication.reducer';
import { fullNameSelector } from 'src/app/reducers/authentication/authentication.selectors';
import { disableEditMode } from 'src/app/reducers/organization-card/organization-card.action';

@Component({
  selector: 'app-authentication-panel',
  templateUrl: './authentication-panel.component.html',
  styleUrls: ['./authentication-panel.component.scss'],
})
export class AuthenticationPanelComponent implements OnInit {

  fullName$ = this.store.select(fullNameSelector);
  fullName: string | null = null;

  constructor(private store: Store<AuthenticationState>,
    private router: Router) { }

  ngOnInit() {
    this.fullName$.subscribe(
      (fullNameSelector) => (this.fullName = fullNameSelector)
    );

    if (!this.fullName) {
      this.store.dispatch(setUserData());
    }
  }

  handleUserNameClick() {
    this.store.dispatch(logOut());
    this.store.dispatch(disableEditMode());
    this.router.navigate(['/not-authenticated']);
  }
}
