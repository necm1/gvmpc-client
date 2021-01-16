import GuiReadyEvent from './event/gui/ready';
class EventManager {
  events$ = new Map();

  constructor() {
    // GUI Events
    this.add('guiReady', GuiReadyEvent.execute);
  }

  /**
   * Add event
   *
   * @param {string} key
   * @param {void} handler
   */
  add(key, handler) {
    this.events$.set(key, handler);
    mp.events.add(key, handler.bind(this));
  }

  /**
   * Remove event
   *
   * @param {string} key
   */
  remove(key) {
    this.events$.delete(key);
  }

  /**
   * Get entry
   *
   * @param {string} key
   */
  get(key) {
    return this.events$.get(key);
  }

  get events() {
    return this.events$;
  }
}

export default new EventManager();
