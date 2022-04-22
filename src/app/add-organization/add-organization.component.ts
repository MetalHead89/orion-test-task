import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { HeadOrganization } from 'src/database/head-organization-bd';
import { OrganizationType } from '../reducers/add-organization/add-organization-reducer';
import { saveBranch, saveHeadOrganization, setOrganizationType } from '../reducers/add-organization/add-organization.actions';
import { organizationTypeSelector } from '../reducers/add-organization/add-organization.selectors';
import { setUserData } from '../reducers/authentication/authentication.actions';
import { Role } from '../reducers/authentication/authentication.reducer';
import { roleSelector } from '../reducers/authentication/authentication.selectors';
import { headOrganizationsSelector } from '../reducers/head-organization/head-organization.selectors';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss'],
  host: { class: 'add-organization' },
  encapsulation: ViewEncapsulation.None,
})
export class AddOrganizationComponent implements OnInit {
  headOrganizations$ = this.store.select(headOrganizationsSelector);
  headOrganizations: HeadOrganization[] = [];

  organizationType$ = this.store.select(organizationTypeSelector);
  organizationType: OrganizationType = null;

  role$ = this.store.select(roleSelector);
  role: Role = null;

  headForm: FormGroup | null = null;
  branchForm: FormGroup | null = null;

  constructor(private router: Router,
    private store: Store) { }

  handleOrganizationTypeChange(type: OrganizationType): void {
    this.store.dispatch(setOrganizationType({ payload: { type } }))
  }

  handleBackClick(): void {
    this.router.navigate(['/']);
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
        saveBranch(
          {
            payload: {
              ...this.branchForm.value,
              headOrganization: parseInt(this.branchForm.value.headOrganization, 10)
            }
          }
        )
      );
    }
  }

  ngOnInit(): void {
    this.headOrganizations$.subscribe(
      (headOrganizationsSelector) => {
        this.headOrganizations = headOrganizationsSelector
      }
    );

    this.role$.subscribe((roleSelector) => {
      this.role = roleSelector;
    });

    this.organizationType$.subscribe((typeSelector) => {
      this.organizationType = typeSelector;

      this.changeOrganizationType();
    });

    if (!this.role) {
      this.store.dispatch(setUserData());
    }
    this.headOrganizations$.subscribe(
      (headOrganizationsSelector) => {
        this.headOrganizations = headOrganizationsSelector
      }
    );

    this.role$.subscribe((roleSelector) => {
      this.role = roleSelector;
    });

    this.organizationType$.subscribe((typeSelector) => {
      this.organizationType = typeSelector;

      this.changeOrganizationType();
    });

    if (!this.role) {
      this.store.dispatch(setUserData());
    }
  }

  private changeOrganizationType() {
    if (this.organizationType === 'head') {
      this.headForm = new FormGroup({
        id: new FormControl(0),
        fullOrganizationName: new FormControl('', [Validators.required]),
        shortOrganizationName: new FormControl('', [Validators.required]),
        tin: new FormControl('', [Validators.required]),
        kpp: new FormControl('', [Validators.required]),
        founder: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        telephone: new FormControl('', [Validators.required])
      });
      this.branchForm = null
    } else if (this.organizationType === 'branch') {
      this.branchForm = new FormGroup({
        id: new FormControl(0),
        headOrganization: new FormControl(0, [Validators.required]),
        address: new FormControl('', [Validators.required]),
        telephone: new FormControl('', [Validators.required]),
        executive: new FormControl('', [Validators.required]),
      });

      this.headForm = null;
    } else {
      this.headForm = null;
      this.branchForm = null;
    }
  }
}
