import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { event } from '../decorator/event.decorator';

@Component({
  selector: 'gvmpc-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations: [
    trigger('fade', [
      transition('1 => 0', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ChatComponent implements OnInit {
  state: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @event('test')
  test(...args: any[]): void {
    this.state = this.state ? false : true;
    console.log(this.state);
  }
}
