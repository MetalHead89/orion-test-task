import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Branch } from 'src/database/branch-bd';
import { HeadOrganization } from 'src/database/head-organization-bd';
import { setUserData } from '../reducers/authentication/authentication.actions';
import {
  AuthenticationState,
  Role,
} from '../reducers/authentication/authentication.reducer';
import { roleSelector } from '../reducers/authentication/authentication.selectors';
import { loadBranches } from '../reducers/branch/branch.action';
import { branchesSelector } from '../reducers/branch/branch.selectors';
import { load } from '../reducers/head-organization/head-organization.action';
import { headOrganizationsSelector } from '../reducers/head-organization/head-organization.selectors';
import { setActiveOrganization, showOrganizationCard } from '../reducers/home/home.action';
import { OrganizationData, OrganizationDisplayType } from '../reducers/home/home.reducer';
import { isOrganizationCardSelector, organizationDisplayTypeSelector } from '../reducers/home/home.selectors';

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

  isOrganizationCard$ = this.store.select(isOrganizationCardSelector);
  isOrganizationCard: boolean = false;

  organizationsList: (HeadOrganization | (Branch & { fullOrganizationName: string }))[] = [];
  organizationsTree: (HeadOrganization & { branch: Branch[] })[] = [];

  constructor(
    private router: Router,
    private store: Store<AuthenticationState>
  ) { }

  handleDisplayTypeRadioChange(displayType: OrganizationDisplayType) {
    this.organizationDisplayType = displayType;
  }

  handleItemClick(event: MouseEvent, organizationData: OrganizationData) {
    this.store.dispatch(setActiveOrganization({ organizationData }))
    this.store.dispatch(showOrganizationCard())
    event.preventDefault();
  }

  handleHiddenOrganizationListClick(event: MouseEvent) {
    event.preventDefault();
  }

  handleAddOrganizationClick() {
    this.router.navigate(['/add-organization']);
  }

  ngOnInit(): void {
    this.branches$.subscribe(
      (branchesSelector) => {
        this.branches = branchesSelector
        this.setOrganizations();
      }
    );

    this.headOrganizations$.subscribe(
      (headOrganizationsSelector) => {
        this.headOrganizations = headOrganizationsSelector
        this.setOrganizations();
      }
    );

    this.organizationDisplayType$.subscribe(
      (organizationDisplayTypeSelector) =>
        (this.organizationDisplayType = organizationDisplayTypeSelector)
    );

    this.isOrganizationCard$.subscribe(
      (isOrganizationCardSelector) =>
        (this.isOrganizationCard = isOrganizationCardSelector)
    );

    this.role$.subscribe((roleSelector) => {
      this.role = roleSelector;
    });

    if (!this.role) {
      this.store.dispatch(setUserData());
    }

    if (this.headOrganizations.length === 0) {
      this.store.dispatch(load());
    }
    if (this.branches.length === 0) {
      this.store.dispatch(loadBranches());
    }
    this.setOrganizations();
  }

  private setOrganizations(): void {
    this.organizationsTree = this.headOrganizations.map(organization => (
      { ...organization, branch: [] })
    )
    this.organizationsList = [...this.organizationsTree];

    this.branches.forEach(branch => {
      this.organizationsTree.forEach(organization => {
        if (organization.id === branch.headOrganization) {
          organization.branch.push(branch)
          this.organizationsList.push({ ...branch, fullOrganizationName: organization.fullOrganizationName })
        }
      })
    })

    this.organizationsList.sort(
      (a, b) => (a.fullOrganizationName.localeCompare(b.fullOrganizationName) || a.address.localeCompare(b.address))
    )

    this.organizationsTree.sort(
      (a, b) => a.fullOrganizationName.localeCompare(b.fullOrganizationName)
    )
  }
}
