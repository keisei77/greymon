import { BaseType, Action } from './base';
export interface PerfectType {
  head: BaseType;
  body: BaseType;
  arms: BaseType;
  legs: BaseType;
  feet: BaseType;
}

type PartType = 'head' | 'body' | 'arms' | 'legs' | 'feet';

interface RegisteredActions {
  [key: string]: Action;
}

export default class Perfect {
  private assembly: any = null;
  private registeredActions: RegisteredActions = null;
  constructor(perfect: PerfectType) {
    this.assembly = perfect;
    this.register(this.assembly);
  }

  register = (assembly: PerfectType) => {
    this.registeredActions = Object.entries(assembly)
      .map(([part, registration]: [PartType, BaseType]) => {
        return registration.actions.map(
          (action: Action): RegisteredActions => ({
            // action.name => 'bound run'
            [action.name.slice(6)]: action,
          })
        );
      })
      .reduce((prev: RegisteredActions, acc: RegisteredActions[]) => {
        const parsedAcc = acc.reduce(
          (p: RegisteredActions, a: RegisteredActions) => {
            const actionName = Object.keys(a)[0];
            p[actionName] = a[actionName];
            return p;
          },
          {}
        );
        prev = { ...prev, ...parsedAcc };
        return prev;
      }, {});
    return this;
  };

  /**
   *
   * @param actions: string[]
   *
   * perfect.act(['nod', 'run']);
   */

  act = (actions: string[]) => {
    actions.forEach((action) => {
      this.registeredActions[action](this);
    });
    return this;
  };

  getActions = () => {
    return this.registeredActions;
  };
}
