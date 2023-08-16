declare class LoggerExtended {
    private static _instance?;
    private _globalContext;
    private proxy;
    static startCustomizedLog(): LoggerExtended;
    private constructor();
    static resetConsole(): void;
}
export default LoggerExtended;
