import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Role } from '../reducers/authentication/authentication.reducer';
import { roleSelector } from '../reducers/authentication/authentication.selectors';
import { closeOrganizationCard } from '../reducers/home/home.action';
import { HomeState } from '../reducers/home/home.reducer';

@Component({
  selector: 'app-organization-card',
  templateUrl: './organization-card.component.html',
  styleUrls: ['./organization-card.component.scss']
})
export class OrganizationCardComponent implements OnInit {

  role$ = this.store.select(roleSelector);
  role: Role = null;

  constructor(private store: Store<HomeState>) {
    this.role$.subscribe((roleSelector) => {
      this.role = roleSelector;
    });
  }

  handleCloseClick() {
    this.store.dispatch(closeOrganizationCard())
  }

  ngOnInit(): void {
  }

}
