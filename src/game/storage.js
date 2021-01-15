import Browser from './browser';

class Storage {
  add(...args) {
    Browser.log(args);
  }
}

export default new Storage();
