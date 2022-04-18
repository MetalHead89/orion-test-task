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
import { loadBranches } from '../reducers/branch/branch.action';
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
  organizationsTree: (HeadOrganization & { branch: Branch[] })[] = [];

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
  }

  handleDisplayTypeRadioChange(displayType: OrganizationDisplayType) {
    this.organizationDisplayType = displayType;
  }

  ngOnInit(): void {
    this.store.dispatch(load());
    this.store.dispatch(loadBranches());
    this.setOrganizationsList();
    this.setOrganizationsTree();
  }

  private setOrganizationsList(): void {
    this.organizationsList = [...this.headOrganizations, ...this.branches].sort(
      (a, b) => a.address.localeCompare(b.address)
    );
  }

  private setOrganizationsTree(): void {
    this.organizationsTree = this.headOrganizations.map(organization => (
      { ...organization, branch: [] })
    )

    this.branches.forEach(branch => {
      this.organizationsTree.forEach(organization => {
        if (organization.id === branch.headOrganization) {
          organization.branch.push(branch)
        }
      })
    })

    this.organizationsTree.sort(
      (a, b) => a.address.localeCompare(b.address)
    )
  }
}
