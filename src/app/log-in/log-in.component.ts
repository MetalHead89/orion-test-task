import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import databaseFunctions from 'src/database/database-functions';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  host: { class: 'log-in' },
  encapsulation: ViewEncapsulation.None,
})
export class LogInComponent implements OnInit {
  form: FormGroup;
  isAuthenticationFailed: boolean;
  router: Router;

  constructor(router: Router) {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.isAuthenticationFailed = false;
    this.router = router;
  }

  submit() {
    if (
      databaseFunctions.login(this.form.value.login, this.form.value.password)
    ) {
      this.router.navigate(['/']);
    } else {
      this.isAuthenticationFailed = true;
    }
  }

  ngOnInit(): void {}
}
