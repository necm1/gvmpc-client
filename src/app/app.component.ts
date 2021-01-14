import { Component } from '@angular/core';
import { RageService } from './_service/rage.service';
@Component({
  selector: 'gvmpc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private rage: RageService) {}
}
