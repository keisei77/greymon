import { constructorFactory } from '../utils/constructorFactory';

export interface HeadType {
  component: any;
  actions: (() => void)[];
}

class head {
  component: any = null;
  actions: (() => void)[] = [];
}

export default constructorFactory(head);
