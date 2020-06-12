import Perfect from './index';

export type Action = (arg: Perfect) => void;

export interface BaseType {
  descriptor: any;
  actions: Action[];
}

export default class Base {
  descriptor: any = null;
  actions: Action[] = [];

  constructor({ descriptor, actions }: BaseType) {
    this.descriptor = descriptor;
    this.actions = actions.map((action) => action.bind(this));
  }
}
