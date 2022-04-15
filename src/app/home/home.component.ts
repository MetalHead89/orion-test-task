import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  AuthenticationState,
  Role,
} from '../reducers/authentication/authentication.reducer';
import { selectRole } from '../reducers/authentication/authentication.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  role: Role = null;

  constructor(
    private router: Router,
    private store$: Store<AuthenticationState>
  ) {
    this.store$
      .select(selectRole)
      .subscribe((selectRole) => (this.role = selectRole));

    console.log(this.role);

    if (!this.role) {
      this.router.navigate(['/not-authenticated']);
    }
  }

  ngOnInit(): void {}
}
