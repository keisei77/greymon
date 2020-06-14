type PlayGroundType = '2d' | '3d';

interface PlayGroundOptions {
  type: PlayGroundType;
}

export default class playGround {
  private type: PlayGroundType = '2d';

  constructor(mountEl: HTMLElement, options: PlayGroundOptions) {
    const canvasEl = document.createElement('canvas');
    const canvas = canvasEl.getContext(options.type);
    mountEl.appendChild(canvasEl);
  }
}
