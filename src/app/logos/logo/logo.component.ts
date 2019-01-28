import {Component, Input, OnInit} from '@angular/core';
import { LogoService } from '../../services/logoService.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() logoItem: any;

  constructor(private logoService: LogoService) { }

  ngOnInit() {

  }

  selectLogo(): void {
    this.logoService.changeLogo(this.logoItem);
  }

}
