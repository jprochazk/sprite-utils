
import * as fs from "fs"
import { parseGIF, decompressFrames } from "gifuct-js";
import { createCanvas, createImageData } from "canvas";

export interface Frame {
    delay: number;
    data: string;
}

export function getGIFFrames(path: string): Frame[] {
    const frames = decompressFrames(parseGIF(fs.readFileSync(path)), true);

    if (frames.length === 0)
        throw new Error(`Failed to process GIF -> GIF is empty!`);

    const width = frames[0].dims.width;
    const height = frames[0].dims.height;

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");
    const im_canvas = createCanvas(width, height);
    const im_ctx = im_canvas.getContext("2d");

    const processedFrames: Frame[] = [];

    let frameImageData: ImageData | null = null;
    for (const frame of frames) {
        if (!frameImageData ||
            frame.dims.width !== frameImageData.width ||
            frame.dims.height !== frameImageData.height) {
            im_canvas.width = frame.dims.width;
            im_canvas.height = frame.dims.height;
            frameImageData = createImageData(frame.dims.width, frame.dims.height);
        }

        frameImageData.data.set(frame.patch);
        im_ctx.putImageData(frameImageData, 0, 0);
        ctx.drawImage(im_canvas, frame.dims.left, frame.dims.top);

        processedFrames.push({
            delay: frame.delay,
            data: canvas.toDataURL(),
        });
    }

    return processedFrames;
}
