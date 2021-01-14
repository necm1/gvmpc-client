interface ClientEvent {
  key: string;
  handler: (...args: any[]) => void;
}

/**
 * @class EventHandler
 */
export class EventHandler {
  private static events: ClientEvent[] = [];

  /**
   * Add event
   *
   * @param key
   * @param handler
   */
  static addEvent(key: string, handler: (...args: any[]) => void): void {
    if (EventHandler.get(key)) {
      return;
    }

    EventHandler.events.push({
      key,
      handler,
    });
  }

  /**
   * Get event by key
   *
   * @param key
   * @returns {ClientEvent}
   */
  static get(key: string): ClientEvent {
    return EventHandler.events.filter((entry) => entry.key === key)[0];
  }

  /**
   * Remove event
   *
   * @param key
   */
  static removeEvent(key: string): void {
    EventHandler.events = EventHandler.events.filter(
      (entry) => entry.key !== key
    );
  }
}

/**
 * Call event
 *
 * @param key
 * @param args
 */
function callEvent(key: string, ...args: any[]): void {
  EventHandler.get(key).handler(args);
}

// make callEvent accessiable from the client
window['call'] = callEvent;
