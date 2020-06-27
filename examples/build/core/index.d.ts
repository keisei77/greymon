import { BaseType, Action } from './base';
import Head from './head';
import Body from './body';
import Arms from './arms';
import Feet from './feet';
import Legs from './legs';
export { Head, Body, Arms, Feet, Legs };
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
    /**
     *
     *
     * @memberof Perfect
     */
    getActions: () => RegisteredActions;
    /**
     *
     *
     * @memberof Perfect
     */
    getDescriptors: () => {
        [x: string]: any;
    }[];
}
