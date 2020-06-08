export interface BaseType {
  descriptor: any;
  actions: (() => void)[];
  actionList?: string[];
}

export default class Base {
  descriptor: any = null;
  actions: (() => void)[] = [];
  private actionList: string[] = [];

  constructor({ descriptor, actions }: BaseType) {
    this.descriptor = descriptor;
    this.actions = actions.map((action) => action.bind(this));
    this.actionList = actions.map((action) => action.name);
  }
}
