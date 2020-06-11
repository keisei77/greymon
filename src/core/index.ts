import head from './head';
import body from './body';
import arms from './arms';
import legs from './legs';
import feet from './feet';
import { BaseType } from './base';
export interface PerfectType {
  head: BaseType;
  body: BaseType;
  arms: BaseType;
  legs: BaseType;
  feet: BaseType;
}

type PartType = 'head' | 'body' | 'arms' | 'legs' | 'feet';

interface RegisteredActions {
  [key: string]: PartType;
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
        return registration.actionList.map(
          (actionName: string): RegisteredActions => ({
            [actionName]: part,
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

  act = (actions: string[]) => {};

  getActions = () => {
    return this.registeredActions;
  };
}
