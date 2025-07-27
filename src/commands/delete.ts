import { SlashCommandSubcommandBuilder } from "discord.js";
import type { Command } from "../types";

const command: Command = {
    data: new SlashCommandSubcommandBuilder()
        .setName("delete")
        .setDescription("delete a drawing")
        .addStringOption((option) =>
            option
                .setName("uuid")
                .setDescription(
                    "uuid of the user you want to delete the drawing of"
                )
                .setRequired(true)
        ),
    async run(interaction) {},
};

export default command;
