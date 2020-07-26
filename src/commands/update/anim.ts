import { Command, flags } from "@oclif/command";
import { loadSprite, updateSpriteAnims, saveSprite } from "../../sprite"

export default class Anim extends Command {
    static description = "Updates the sprite's animations";

    static examples = [
        `$ sprite-utils update:anim test animA.gif animB.gif`,
    ];

    static flags = {
        help: flags.help({ char: "h" }),
    };

    static args = [
        { name: "name", required: true, description: "Sprite name" },
        { name: "files", required: true, description: "List of GIF file paths" },
    ];

    static strict = false;

    async run() {
        const { args } = this.parse(Anim);
        const path = `${args.name}.sprite`;
        const sprite = loadSprite(path);
        updateSpriteAnims(sprite, this.argv.slice(1));
        saveSprite(path, sprite);
    }
}
