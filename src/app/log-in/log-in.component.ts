import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  host: { class: 'log-in' },
  encapsulation: ViewEncapsulation.None,
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
