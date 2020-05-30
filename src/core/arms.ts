import { constructorFactory } from '../utils/constructorFactory';

export interface ArmsType {
  component: any;
  actions: (() => void)[];
}

class arms {
  component: any = null;
  actions: (() => void)[] = [];

  constructor() {}
}

export default constructorFactory(arms);
