import {Component} from '@angular/core';
import {AuthService} from './login/service/auth.service';
import {LoggerService} from './_service/logger.service';
import {RageService} from './_service/rage.service';
@Component({
  selector: 'gvmpc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
/**
 * @class AppComponent
 */
export class AppComponent {
  /**
   * AppComponent constructor
   *
   * @constructor
   * @param rage
   * @param logger
   * @param userService
   */
  constructor(
    private rage: RageService,
    private logger: LoggerService,
    private authService: AuthService
  ) {}

  /**
   * @public
   * @returns boolean
   */
  public get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }
}
