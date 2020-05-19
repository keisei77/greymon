export interface BodyType {
  component: any;
  actions: (() => void)[];
}

const body: BodyType = {
  component: null,
  actions: [],
};

export default body;
