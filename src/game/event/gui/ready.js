import Browser from './browser';
import Logger from './logger';

/**
 * @class GuiReadyEvent
 */
class GuiReadyEvent {
  execute() {
    // Initialize browser
    Browser.init();
    Logger.debug('Initializing Browser');

    Logger.debug('Game blur was set to 250');
    // Set blurred background
    mp.game.graphics.transitionToBlurred(250);

    Logger.debug('Disabling HUD');
    // Disable hud
    mp.game.ui.displayHud(false);

    Logger.debug('Disabling radar');
    // Disable radar
    mp.game.ui.displayRadar(false);

    Logger.debug('Disabling controls & activating cursor');
    // Disabling controls & showing cursor
    mp.gui.cursor.show(true, true);

    Logger.debug('Set Discord status');
    // Set Discord Status
    mp.discord.update('German V Roleplay', 'GVMPC.net');
  }
}

export default new GuiReadyEvent();
