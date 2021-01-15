import {Component} from '@angular/core';
import {LoggerService} from './_service/logger.service';
import {RageService} from './_service/rage.service';
@Component({
  selector: 'gvmpc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private rage: RageService, private logger: LoggerService) {}
}
