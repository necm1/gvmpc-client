class Browser {
  init() {
    this.browser = mp.browsers.new('http://localhost:4200/');
    this.log('Initialize browser');
  }

  log(msg) {
    this.browser.execute(`window.console.log('${msg}')`);
  }

  add(url) {
    mp.browser.new(url);
  }
}

export default new Browser();
