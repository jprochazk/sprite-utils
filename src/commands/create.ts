import { Command, flags } from "@oclif/command";
import { saveSprite } from "../sprite"

export default class Create extends Command {
    static description = "Create an empty sprite";

    static examples = [
        `$ sprite-utils create test`,
    ];

    static flags = {
        help: flags.help({ char: "h" }),
    };

    static args = [{
        name: "name",
        required: true,
    }];

    async run() {
        const { args } = this.parse(Create);
        saveSprite(`${args.name}.sprite`, {});
    }
}
