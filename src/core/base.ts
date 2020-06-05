export interface BaseType {
  descriptor: any;
  actions: (() => void)[];
}

export default class Base {
  descriptor: any = null;
  actions: (() => void)[] = [];

  constructor({ descriptor, actions }: BaseType) {
    this.descriptor = descriptor;
    this.actions = actions.map((action) => action.bind(this));
  }
}
