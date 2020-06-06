import head from './head';
import body from './body';
import arms from './arms';
import legs from './legs';
import feet from './feet';
import { BaseType } from './base';
export interface PerfectType {
  head: (args: any) => BaseType;
  body: (args: any) => BaseType;
  arms: (args: any) => BaseType;
  legs: (args: any) => BaseType;
  feet: (args: any) => BaseType;
}

export default class Perfect {
  private assembly: any = null;
  constructor() {
    this.assemble({ head, body, arms, legs, feet });
  }

  assemble = (perfect: PerfectType) => {
    this.assembly = { perfect };
  };

  /**
   *
   * @param actions: string[]
   *
   * perfect.act(['nod', 'run']);
   */

  act = (actions: string[]) => {};
}
