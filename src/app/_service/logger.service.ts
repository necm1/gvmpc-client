import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  /**
   * @property
   * @public
   */
  public name: string = 'LoggerService';

  /**
   * Log message
   *
   * @param message
   */
  public log(message: string): void {
    this.baseLog(message, 'log');
  }

  /**
   * Log debug message
   *
   * @param message
   */
  public debug(message: string): void {
    this.baseLog(message, 'debug');
  }

  /**
   * Log error message
   *
   * @param message
   */
  public error(message: string): void {
    this.baseLog(message, 'error');
  }

  /**
   * Log error message
   *
   * @param message
   */
  public trace(message: string): void {
    this.baseLog(message, 'trace');
  }

  /**
   * Log warn message
   *
   * @param message
   */
  public warn(message: string): void {
    this.baseLog(message, 'warn');
  }

  /**
   * @private
   * @param message
   * @param type
   */
  private baseLog(message: string, type: string): void {
    const baseMessage = `[${this.name.toLocaleUpperCase()}][${type.toUpperCase()}][${new Date().toLocaleString()}] - ${message}`;

    switch (type) {
      case 'log':
        console.log(baseMessage);
        break;
      case 'error':
        console.error(baseMessage);
        break;
      case 'debug':
        console.debug(baseMessage);
        break;
      case 'warn':
        console.warn(baseMessage);
        break;
    }
  }
}
