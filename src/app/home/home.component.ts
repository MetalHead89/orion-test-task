import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  AuthenticationState,
  Role,
} from '../reducers/authentication/authentication.reducer';
import { roleSelector } from '../reducers/authentication/authentication.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  role$ = this.store$.select(roleSelector);
  role: Role = null;

  constructor(
    private router: Router,
    private store$: Store<AuthenticationState>
  ) {
    this.role$.subscribe((roleSelector) => (this.role = roleSelector));

    if (!this.role) {
      this.router.navigate(['/not-authenticated']);
    }
  }

  ngOnInit(): void {}
}
