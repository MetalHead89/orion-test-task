import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Branch } from 'src/database/branch-bd';
import { HeadOrganization } from 'src/database/head-organization-bd';
import { Role } from '../reducers/authentication/authentication.reducer';
import { roleSelector } from '../reducers/authentication/authentication.selectors';
import { closeOrganizationCard } from '../reducers/home/home.action';
import { HomeState, OrganizationData } from '../reducers/home/home.reducer';
import { activeOrganizationDataSelector } from '../reducers/home/home.selectors';

@Component({
  selector: 'app-organization-card',
  templateUrl: './organization-card.component.html',
  styleUrls: ['./organization-card.component.scss']
})
export class OrganizationCardComponent implements OnInit {

  headOrganization: HeadOrganization | null = null;
  branch: Branch | null = null;

  role$ = this.store.select(roleSelector);
  role: Role = null;

  organizationData$ = this.store.select(activeOrganizationDataSelector);

  constructor(private store: Store<HomeState>) {
    this.role$.subscribe((roleSelector) => {
      this.role = roleSelector;
    });

    this.organizationData$.subscribe((organizationDataSelector) => {
      this.setOrganizationData(organizationDataSelector);
    });
  }

  handleCloseClick() {
    this.store.dispatch(closeOrganizationCard())
  }

  ngOnInit(): void {
  }

  private setOrganizationData(organization: OrganizationData) {
    if (organization !== null && 'founder' in organization) {
      this.headOrganization = organization;
      this.branch = null;
    } else if (organization !== null) {
      this.headOrganization = null;
      this.branch = organization;
    } else {
      this.headOrganization = null;
      this.branch = null;
    }
  }

}
