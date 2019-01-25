import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.scss']
})
export class LogosComponent implements OnInit {

  logos = ['1','srg1','444', {name: 'xD', logo: 'xDww'}];

  constructor() { }

  ngOnInit() {
  }

}
