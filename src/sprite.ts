
import * as fs from "fs"
import { Frame, getGIFFrames } from "./gif"
import { createCanvas, loadImage } from "canvas";

export interface Sprite {
    static?: string;
    animations?: {
        [name: string]: Frame[];
    };
}

export function loadSprite(path: string): Sprite {
    return JSON.parse(fs.readFileSync(path, { encoding: "ascii" }));
}

export function saveSprite(path: string, sprite: Sprite) {
    fs.writeFileSync(path, JSON.stringify(sprite));
}

export function updateSpriteAnims(sprite: Sprite, animationPaths: string[]) {
    animationPaths
        .map(path => {
            if (!path.toLowerCase().match(".gif")) throw new Error(`Animation must be a .gif file!`);
            return { frames: getGIFFrames(path), name: path.replace(".gif", "") }
        })
        .forEach(animation => {
            if (!sprite.animations) sprite.animations = {};
            sprite.animations[animation.name] = animation.frames;
        });
}

export async function updateSpriteStatic(sprite: Sprite, staticPath: string) {
    if (!staticPath.toLowerCase().match(".png")) throw new Error(`Static image must be a .png file!`);
    const img = await loadImage(staticPath);
    const canvas = createCanvas(img.width, img.height);
    canvas.getContext("2d").drawImage(img, 0, 0);
    sprite.static = canvas.toDataURL();
}
