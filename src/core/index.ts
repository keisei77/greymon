import head, { HeadType } from './head';
import body, { BodyType } from './body';
import arms, { ArmsType } from './arms';
import legs, { LegsType } from './legs';
import foots, { FootsType } from './foots';

export interface PerfectType {
  head: HeadType;
  body: BodyType;
  arms: ArmsType;
  legs: LegsType;
  foots: FootsType;
}

const perfect: PerfectType = {
  head,
  body,
  arms,
  legs,
  foots,
};

export default perfect;
