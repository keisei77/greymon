export interface ArmsType {
  component: any;
  actions: (() => void)[];
}

const arms: ArmsType = {
  component: null,
  actions: [],
};

export default arms;
