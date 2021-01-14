class EventManager {
  events$ = [];

  /**
   * Add event
   *
   * @param {string} key
   * @param {void} handler
   */
  add(key, handler) {
    this.events$.push({
      key,
      handler,
    });

    mp.events.add(key, handler);
  }

  /**
   * Remove event
   *
   * @param {string} key
   */
  remove(key) {
    this.events$ = this.events$.filter((val) => val.key !== key);
  }

  /**
   * Get entry
   *
   * @param {string} key
   */
  get(key) {
    return this.events$((val) => val.key === key)[0];
  }

  get events() {
    return this.events$;
  }
}

export default new EventManager();
