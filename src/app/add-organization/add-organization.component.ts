import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Role } from '../reducers/authentication/authentication.reducer';
import { roleSelector } from '../reducers/authentication/authentication.selectors';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss'],
  host: { class: 'add-organization' },
  encapsulation: ViewEncapsulation.None,
})
export class AddOrganizationComponent implements OnInit {
  role$ = this.store.select(roleSelector);
  role: Role = null;

  constructor(private router: Router,
    private store: Store) {
    this.role$.subscribe((roleSelector) => {
      this.role = roleSelector;

      if (!this.role) {
        this.router.navigate(['/not-authenticated']);
      }
    });
  }

  ngOnInit(): void {
  }

}
