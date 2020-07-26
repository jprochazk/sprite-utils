
declare module "gifuct-js" {
    export interface Frame {
        pixels: number[];
        dims: {
            top: number;
            left: number;
            width: number;
            height: number;
        };
        colorTable: Uint8Array[];
        delay: number;
        disposalType: number;
        transparentIndex: number;
        patch: Uint8ClampedArray;
    }

    export function parseGIF(buffer: ArrayBuffer): any;
    export function decompressFrames(gif: any, buildPatch: boolean): Frame[];
}
