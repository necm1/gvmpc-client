import Logger from './logger';

class Storage {
  add(...args) {
    Logger.debug(`Added ${args[0]} with ${args[1]}`);
    window.localStorage(args[0], args[1]);
  }
}

export default new Storage();
