import Browser from './browser';
import Logger from './logger';

/**
 * @class PlayerReadyEvent
 */
class PlayerReadyEvent {
  execute(player) {
    Logger.debug('Player is ready');
    mp.gui.chat.show(false);
    mp.gui.chat.activate(false);
  }
}

export default new PlayerReadyEvent();
