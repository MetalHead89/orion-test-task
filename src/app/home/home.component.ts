import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { HeadOrganization } from 'src/database/head-organization-bd';
import {
  AuthenticationState,
  Role,
} from '../reducers/authentication/authentication.reducer';
import { roleSelector } from '../reducers/authentication/authentication.selectors';
import { load } from '../reducers/head-organization/head-organization.action';
import { headOrganizationsSelector } from '../reducers/head-organization/head-organization.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  role$ = this.store.select(roleSelector);
  role: Role = null;

  headOrganizations$ = this.store.select(headOrganizationsSelector);
  headOrganizations: HeadOrganization[] = [];

  constructor(
    private router: Router,
    private store: Store<AuthenticationState>
  ) {
    this.headOrganizations$.subscribe(
      (headOrganizationsSelector) =>
        (this.headOrganizations = headOrganizationsSelector)
    );

    this.role$.subscribe((roleSelector) => (this.role = roleSelector));

    if (!this.role) {
      this.router.navigate(['/not-authenticated']);
    }
  }

  ngOnInit(): void {
    this.store.dispatch(load());
  }
}
