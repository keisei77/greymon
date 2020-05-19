export interface LegsType {
  component: any;
  actions: (() => void)[];
}

const legs: LegsType = {
  component: null,
  actions: [],
};

export default legs;
