import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthenticationState } from 'src/app/reducers/authentication/authentication.reducer';
import { fullNameSelector } from 'src/app/reducers/authentication/authentication.selectors';

@Component({
  selector: 'app-authentication-panel',
  templateUrl: './authentication-panel.component.html',
  styleUrls: ['./authentication-panel.component.scss'],
})
export class AuthenticationPanelComponent {
  fullName$ = this.store$.select(fullNameSelector);
  fullName: string | null = null;

  constructor(private store$: Store<AuthenticationState>) {
    this.fullName$.subscribe(
      (fullNameSelector) => (this.fullName = fullNameSelector)
    );
  }
}
