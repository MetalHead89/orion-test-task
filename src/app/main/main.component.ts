import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  host: { class: 'main' },
  encapsulation: ViewEncapsulation.None
})
export class MainComponent { }
