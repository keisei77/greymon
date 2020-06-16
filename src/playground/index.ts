type PlayGroundType = 'webgl' | 'webgl2';

interface PlayGroundOptions {
  type: PlayGroundType;
}

export default class playGround {
  private type: PlayGroundType = 'webgl';

  constructor(mountEl: HTMLElement, options: PlayGroundOptions) {
    const canvasEl = document.createElement('canvas');
    // @ts-ignore
    const canvas:
      | WebGLRenderingContext
      | WebGL2RenderingContext = canvasEl.getContext(options.type);
    mountEl.appendChild(canvasEl);
  }
}
