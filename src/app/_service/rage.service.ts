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
      console.log('hi?');
      this.mp.trigger('addStorage', 'aDASD ASDASDASD');
    }
  }

  /**
   * Trigger event
   *
   * @param key
   * @param value
   */
  trigger(key: string, value: string | number): void {
    this.mp.trigger(key, value);
  }
}
