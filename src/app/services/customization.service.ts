import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CustomizationService {

  flipFlopColor = new Subject<string>();

  changeFlipFlopColor(color: string): void {
    this.flipFlopColor.next(color);
  }

  flipFlopColorStream(): Observable<any> {
    return this.flipFlopColor.asObservable();
  }
}

