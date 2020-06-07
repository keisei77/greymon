import { BaseType } from '../core/base';

type Constructor = new (args: BaseType) => any;

export const constructorFactory = (Cls: Constructor) => (args: BaseType) => {
  return new Cls(args);
};
