class LoggerExtended {
    private static _instance?: LoggerExtended;
    private _globalContext: any;
    private proxy: any;
  
    static startCustomizedLog(): LoggerExtended {
      if (!this._instance) {
        this._instance = new LoggerExtended();
      }
      return this._instance;
    }
  
    private constructor() {
      // Detect environment and set the global context and original console
      const isNodeEnvironment = typeof process !== 'undefined' && process.versions && process.versions.node;
      const isBrowserEnvironment = typeof window !== 'undefined';
      if (isNodeEnvironment) {
        this._globalContext = global;
      } else if (isBrowserEnvironment) {
        this._globalContext = window;
      } else {
        throw new Error('Unknown environment');
      }
      if (!this._globalContext.originalConsole) {
        this._globalContext.originalConsole = { ...this._globalContext.console };
      }
  
      const consoleNames = Object.keys(this._globalContext.originalConsole);
  
      const getConsolObj = (name: string) => {
        const consoleObject: any = {};
        if (consoleNames.includes(name)) {
          return this._globalContext.originalConsole[name];
        }
        for (const key in this._globalContext.originalConsole) {
          if (typeof this._globalContext.originalConsole[key] === 'function') {
            consoleObject[key] = this._globalContext.originalConsole[key].bind(this._globalContext.originalConsole, `[${name}]:`);
          } else {
            consoleObject[key] = this._globalContext.originalConsole[key];
          }
        }
        return consoleObject;
      };
  
      const handler = {
        get: function (target: any, name: string) {
          return getConsolObj(name);
        }
      };
  
      this.proxy = new Proxy({}, handler);
      this._globalContext.console = this.proxy;
    }
  
    static resetConsole(): void {
      if (LoggerExtended._instance && LoggerExtended._instance._globalContext.originalConsole) {
        LoggerExtended._instance._globalContext.console = LoggerExtended._instance._globalContext.originalConsole;
        delete LoggerExtended._instance._globalContext.originalConsole;
      }
      LoggerExtended._instance = undefined;
    }
  }
  LoggerExtended.startCustomizedLog();
  export default LoggerExtended;