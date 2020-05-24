import { constructorFactory } from '../utils/constructorFactory';

export interface LegsType {
  component: any;
  actions: (() => void)[];
}

class legs {
  component: any = null;
  actions: (() => void)[] = [];
}

export default constructorFactory(legs);
