import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  host: { class: 'log-in' },
  encapsulation: ViewEncapsulation.None,
})
export class LogInComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(''),
      password: new FormControl('')
    })
  }

  submit() {
    console.log(this.form);
  }

  ngOnInit(): void {
  }

}
