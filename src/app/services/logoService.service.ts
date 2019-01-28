import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class LogoService {

  activeLogo = new Subject<string>();

  changeLogo(logo: string): void {
    this.activeLogo.next(logo);
  }

  activeLogoStream(): Observable<any> {
    return this.activeLogo.asObservable();
  }
}

