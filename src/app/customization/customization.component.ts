import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.scss']
})
export class CustomizationComponent implements OnInit {

  primary: '#dddddd';
  secondary: '#ba1f1f';

  constructor() { }

  ngOnInit() {
  }

}
