import { constructorFactory } from '../utils/constructorFactory';

export interface BodyType {
  component: any;
  actions: (() => void)[];
}

class body {
  component: any = null;
  actions: (() => void)[] = [];
}

export default constructorFactory(body);
