type PlayGroundType = '2d' | '3d';

interface PlayGroundOptions {}

export default class playGround {
  private type: PlayGroundType = '2d';

  constructor(options: PlayGroundOptions) {}
}
