import Browser from './browser';
import Logger from './logger';

class GuiReadyEvent {
  execute() {
    Browser.init();
    Logger.debug('test');
    mp.game.graphics.transitionToBlurred(250);
    mp.game.ui.displayHud(false);
    mp.game.ui.displayRadar(false);
  }
}

export default new GuiReadyEvent();
