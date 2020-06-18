import { BaseType, Action } from './base';
export interface PerfectType {
    head: BaseType;
    body: BaseType;
    arms: BaseType;
    legs: BaseType;
    feet: BaseType;
}
interface RegisteredActions {
    [key: string]: Action;
}
export default class Perfect {
    private assembly;
    private registeredActions;
    constructor(perfect: PerfectType);
    register: (assembly: PerfectType) => this;
    /**
     *
     * @param actions: string[]
     *
     * perfect.act(['nod', 'run']);
     */
    act: (actions: string[]) => this;
    getActions: () => RegisteredActions;
}
export {};
