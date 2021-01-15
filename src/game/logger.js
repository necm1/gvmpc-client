import Browser from './browser';

class Logger {
  log(msg) {
    Browser.execute(
      `window.ng.getComponent(document.querySelector('gvmpc-root')).logger.log('${msg}')`
    );
  }

  error(msg) {
    Browser.execute(
      `window.ng.getComponent(document.querySelector('gvmpc-root')).logger.error('${msg}')`
    );
  }

  debug(msg) {
    Browser.execute(
      `window.ng.getComponent(document.querySelector('gvmpc-root')).logger.debug('${msg}')`
    );
  }

  warn(msg) {
    Browser.execute(
      `window.ng.getComponent(document.querySelector('gvmpc-root')).logger.warn('${msg}')`
    );
  }
}

export default new Logger();
