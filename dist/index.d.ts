declare class LoggerExtended {
    private static _instance?;
    private _globalContext;
    private proxy;
    static startCustomizedLog(): LoggerExtended;
    private constructor();
    static resetConsole(): void;
}
declare const instance: LoggerExtended;
export default instance;
