type Constructor = new (args: any) => any;

export const constructorFactory = (Cls: Constructor) => (args: any) => {
  return new Cls(args);
};
