import { Command, flags } from '@oclif/command'
import { loadSprite, updateSpriteStatic, saveSprite } from "../../sprite"

export default class Static extends Command {
    static description = "Updates the sprite's static texture";

    static examples = [
        `$ sprite-utils update:static test image.png`,
    ];

    static flags = {
        help: flags.help({ char: "h" }),
    };

    static args = [
        { name: "name", required: true, description: "Sprite name" },
        { name: "file", required: true, description: "Path to a PNG file" },
    ];

    async run() {
        const { args } = this.parse(Static);
        const path = `${args.name}.sprite`;
        const sprite = loadSprite(path);
        await updateSpriteStatic(sprite, args.file);
        saveSprite(path, sprite);
    }
}
