import Browser from './browser';

class GuiReadyEvent {
  execute() {
    Browser.init();
    Browser.log('hi from ready.js');
    mp.game.graphics.transitionToBlurred(250);
    mp.game.ui.displayHud(false);
    mp.game.ui.displayRadar(false);
  }
}

export default new GuiReadyEvent();
