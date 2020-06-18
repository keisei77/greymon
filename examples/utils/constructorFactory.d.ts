import { BaseType } from '../core/base';
declare type Constructor = new (args: BaseType) => any;
export declare const constructorFactory: (Cls: Constructor) => (args: BaseType) => any;
export {};
