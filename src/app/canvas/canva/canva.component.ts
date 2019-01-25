import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './canva.component.html',
  styleUrls: ['./canva.component.scss']
})
export class CanvaComponent implements OnInit {

  @Input() canvaItem: any;

  constructor() { }

  ngOnInit() {

  }

}
