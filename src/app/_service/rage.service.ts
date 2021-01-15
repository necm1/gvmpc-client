import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RageService {
  private mp: any;

  /**
   * RageService constructor
   */
  constructor() {
    if (window && window['mp']) {
      this.mp = window['mp'];
    }
  }

  /**
   * Trigger event
   *
   * @param key
   * @param value
   */
  trigger(key: string, ...args: any[]): void {
    this.mp.trigger(key, args);
  }
}
