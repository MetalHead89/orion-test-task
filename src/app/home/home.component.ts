import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthenticationState, Role } from '../reducers/authentication/authentication.reducer';
import { selectRole } from '../reducers/authentication/authentication.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public role$: Observable<Role> = this.store$.pipe(select(selectRole))

  constructor(private router: Router, private store$: Store<AuthenticationState>) {
    console.log(this.role$)
    if (this.role$ !== null) {
      this.router.navigate(['/not-authenticated']);
    }
  }

  ngOnInit(): void { }

}
