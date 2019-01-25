import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.scss']
})
export class LogosComponent implements OnInit {

  logos = [
    {"title": "bla", "logoName": "iconfinder_deer_3406417.svg"},
    {"title": "blagla", "logoName": "iconfinder_sloth_3406421.svg"},
    {"title": "blagladla", "logoName": "iconfinder_squirrel_3406420.svg"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
