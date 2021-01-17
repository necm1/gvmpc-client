import Logger from './logger';

/**
 * @class GuiLoginOpenEvent
 */
class GuiLoginOpenEvent {
  execute() {
    Logger.debug('Triggering logging window');
  }
}

export default new GuiLoginOpenEvent();
