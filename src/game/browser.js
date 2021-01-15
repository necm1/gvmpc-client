class Browser {
  init() {
    this.browser = mp.browsers.new('http://localhost:4200/');
  }

  execute(arg) {
    this.browser.execute(arg);
  }

  add(url) {
    mp.browser.new(url);
  }
}

export default new Browser();
