import Perfect from './index';
export declare type Action = (arg: Perfect) => void;
export interface BaseType {
    descriptor: any;
    actions: Action[];
}
export default class Base {
    descriptor: any;
    actions: Action[];
    constructor({ descriptor, actions }: BaseType);
}
