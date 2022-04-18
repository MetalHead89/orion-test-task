import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { closeOrganizationCard } from '../reducers/home/home.action';
import { HomeState } from '../reducers/home/home.reducer';

@Component({
  selector: 'app-organization-card',
  templateUrl: './organization-card.component.html',
  styleUrls: ['./organization-card.component.scss']
})
export class OrganizationCardComponent implements OnInit {

  constructor(private store: Store<HomeState>) { }

  handleCloseClick() {
    this.store.dispatch(closeOrganizationCard())
  }

  ngOnInit(): void {
  }

}
