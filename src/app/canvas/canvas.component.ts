import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  // primary: '#dddddd';
  top: '#5228ba';
  stitches: '#000000';
  bigLogo: '#dddddd';
  smallLogo: '#dddddd';
  innerBorder: '#1113BA';
  outerBorder: '#000C80';
  innerSoul: '#1A61E2';
  shadow: '#343434';

  constructor() { }

  ngOnInit() {
  }

}
