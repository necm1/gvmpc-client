/**
 * @class Browser
 */
class Browser {
  /**
   * Initialize browser
   */
  init() {
    this.browser = mp.browsers.new('http://localhost:4200/');
    this.voice = mp.browsers.new('');
  }

  /**
   * Execute in CEF renderer
   *
   * @param arg
   */
  execute(arg) {
    if (!this.browser) {
      return;
    }

    this.browser.execute(arg);
  }
}

export default new Browser();
