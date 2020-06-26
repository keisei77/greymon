declare type PlayGroundType = 'webgl' | 'webgl2';
interface PlayGroundOptions {
    type: PlayGroundType;
}
export default class playGround {
    private type;
    constructor(mountEl: HTMLElement, options: PlayGroundOptions);
}
export {};
