import { constructorFactory } from '../utils/constructorFactory';

export interface FeetType {
  component: any;
  actions: (() => void)[];
}

class feet {
  component: any = null;
  actions: (() => void)[] = [];
}

export default constructorFactory(feet);
