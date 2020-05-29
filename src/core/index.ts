import head, { HeadType } from './head';
import body, { BodyType } from './body';
import arms, { ArmsType } from './arms';
import legs, { LegsType } from './legs';
import feet, { FeetType } from './feet';

export interface PerfectType {
  head: HeadType;
  body: BodyType;
  arms: ArmsType;
  legs: LegsType;
  feet: FeetType;
}

const perfect: PerfectType = {
  head,
  body,
  arms,
  legs,
  feet,
};

export default perfect;
