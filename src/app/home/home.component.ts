import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Branch } from 'src/database/branch-bd';
import { HeadOrganization } from 'src/database/head-organization-bd';
import {
  AuthenticationState,
  Role,
} from '../reducers/authentication/authentication.reducer';
import { roleSelector } from '../reducers/authentication/authentication.selectors';
import { branchesSelector } from '../reducers/branch/branch.selectors';
import { load } from '../reducers/head-organization/head-organization.action';
import { headOrganizationsSelector } from '../reducers/head-organization/head-organization.selectors';
import { OrganizationDisplayType } from '../reducers/home/home.reducer';
import { organizationDisplayTypeSelector } from '../reducers/home/home.selectors';

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

  branches$ = this.store.select(branchesSelector);
  branches: Branch[] = [];

  organizationDisplayType$ = this.store.select(organizationDisplayTypeSelector);
  organizationDisplayType: OrganizationDisplayType = 'list';

  organizationsList: (HeadOrganization | Branch)[] = [];

  constructor(
    private router: Router,
    private store: Store<AuthenticationState>
  ) {
    this.branches$.subscribe(
      (branchesSelector) => (this.branches = branchesSelector)
    );

    this.headOrganizations$.subscribe(
      (headOrganizationsSelector) =>
        (this.headOrganizations = headOrganizationsSelector)
    );

    this.organizationDisplayType$.subscribe(
      (organizationDisplayTypeSelector) =>
        (this.organizationDisplayType = organizationDisplayTypeSelector)
    );

    this.role$.subscribe((roleSelector) => (this.role = roleSelector));

    if (!this.role) {
      this.router.navigate(['/not-authenticated']);
    }

    this.setOrganizationsList();
    console.log(this.branches)
  }

  ngOnInit(): void {
    this.store.dispatch(load());
  }

  private setOrganizationsList(): void {
    this.organizationsList = [
      ...this.headOrganizations,
      ...this.branches,
    ].sort();
  }
}
