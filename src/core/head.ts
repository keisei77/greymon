export interface HeadType {
  component: any;
  actions: (() => void)[];
}

const head: HeadType = {
  component: null,
  actions: [],
};

export default head;
