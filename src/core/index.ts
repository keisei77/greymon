import head, { HeadType } from './head';
import body, { BodyType } from './body';
import arms, { ArmsType } from './arms';
import legs, { LegsType } from './legs';
import feet, { FeetType } from './feet';

export interface PerfectType {
  head: (args: any) => HeadType;
  body: (args: any) => BodyType;
  arms: (args: any) => ArmsType;
  legs: (args: any) => LegsType;
  feet: (args: any) => FeetType;
}

const perfect: PerfectType = {
  head,
  body,
  arms,
  legs,
  feet,
};

export default perfect;
