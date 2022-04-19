import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Branch } from 'src/database/branch-bd';
import { HeadOrganization } from 'src/database/head-organization-bd';
import { Role } from '../reducers/authentication/authentication.reducer';
import { roleSelector } from '../reducers/authentication/authentication.selectors';
import { closeOrganizationCard } from '../reducers/home/home.action';
import { HomeState, OrganizationData } from '../reducers/home/home.reducer';
import { activeOrganizationDataSelector } from '../reducers/home/home.selectors';
import { disableEditMode, enableEditMode, saveBranch, saveHeadOrganization } from '../reducers/organization-card/organization-card.action';
import { isEditingEnabledSelector } from '../reducers/organization-card/organization-card.selectors';

@Component({
  selector: 'app-organization-card',
  templateUrl: './organization-card.component.html',
  styleUrls: ['./organization-card.component.scss']
})
export class OrganizationCardComponent implements OnInit {
  headForm: FormGroup | null = null
  branchForm: FormGroup | null = null

  headOrganization: HeadOrganization | null = null;
  branch: Branch | null = null;

  role$ = this.store.select(roleSelector);
  role: Role = null;

  isEditingEnabled$ = this.store.select(isEditingEnabledSelector);
  isEditingEnabled: boolean = false;

  organizationData$ = this.store.select(activeOrganizationDataSelector);

  constructor(private store: Store<HomeState>) {
    this.role$.subscribe((roleSelector) => {
      this.role = roleSelector;
    });

    this.organizationData$.subscribe((organizationDataSelector) => {
      this.setOrganizationData(organizationDataSelector);
    });

    this.isEditingEnabled$.subscribe((isEditingEnabledSelector) => {
      this.isEditingEnabled = isEditingEnabledSelector;
    });
  }

  handleCloseClick() {
    this.store.dispatch(closeOrganizationCard());
    this.store.dispatch(disableEditMode());
  }

  handleEditClick() {
    this.store.dispatch(enableEditMode())
  }

  submitHeadForm() {
    if (this.headForm !== null) {
      this.store.dispatch(
        saveHeadOrganization({ payload: this.headForm.value })
      );
    }
  }

  submitBranchForm() {
    if (this.branchForm !== null) {
      this.store.dispatch(
        saveBranch({ payload: this.branchForm.value })
      );
    }
  }

  ngOnInit(): void {
  }

  private setOrganizationData(organization: OrganizationData) {
    if (organization !== null && 'founder' in organization) {
      this.headOrganization = organization;
      this.branch = null;

      this.headForm = new FormGroup({
        id: new FormControl(organization.id),
        fullOrganizationName: new FormControl(organization.fullOrganizationName, [Validators.required]),
        shortOrganizationName: new FormControl(organization.shortOrganizationName, [Validators.required]),
        tin: new FormControl(organization.tin, [Validators.required]),
        kpp: new FormControl(organization.kpp, [Validators.required]),
        founder: new FormControl(organization.founder, [Validators.required]),
        address: new FormControl(organization.address, [Validators.required]),
        telephone: new FormControl(organization.telephone, [Validators.required])
      });
      this.branch = null;
    } else if (organization !== null) {
      this.headOrganization = null;
      this.branch = organization;

      this.branchForm = new FormGroup({
        id: new FormControl(organization.id),
        headOrganization: new FormControl(organization.headOrganization),
        address: new FormControl(organization.address, [Validators.required]),
        telephone: new FormControl(organization.telephone, [Validators.required]),
        executive: new FormControl(organization.executive, [Validators.required]),
      });
      this.headForm = null;
    } else {
      this.headOrganization = null;
      this.branch = null;
      this.headForm = null;
      this.branch = null;
    }
  }

}
