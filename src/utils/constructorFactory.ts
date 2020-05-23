type Constructor = new () => any;

export const constructorFactory = (Cls: Constructor) => {
  return new Cls();
};
