import Browser from './browser';
import Logger from './logger';

/**
 * @class GuiReadyEvent
 */
class GuiReadyEvent {
  execute() {
    // Initialize browser
    Browser.init();

    // Set blurred background
    mp.game.graphics.transitionToBlurred(250);

    // Disable hud
    mp.game.ui.displayHud(false);

    // Disable radar
    mp.game.ui.displayRadar(false);

    // Disable standard chat
    mp.gui.chat.show(false);
  }
}

export default new GuiReadyEvent();
