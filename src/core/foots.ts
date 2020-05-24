import { constructorFactory } from '../utils/constructorFactory';

export interface FootsType {
  component: any;
  actions: (() => void)[];
}

class foots {
  component: any = null;
  actions: (() => void)[] = [];
}

export default constructorFactory(foots);
