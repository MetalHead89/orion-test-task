import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-not-authenticated',
  templateUrl: './not-authenticated.component.html',
  styleUrls: ['./not-authenticated.component.scss'],
  host: { class: 'not-authenticated' },
  encapsulation: ViewEncapsulation.None
})
export class NotAuthenticatedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
