import { SlashCommandSubcommandBuilder } from "discord.js";
import type { Command } from "../types";

const command: Command = {
    data: new SlashCommandSubcommandBuilder()
        .setName("search")
        .setDescription("search a drawing")
        .addStringOption((option) =>
            option
                .setName("name")
                .setDescription(
                    "name of the drawing you want to search"
                )
                .setRequired(true)
        ),
    async run(interaction) {
    },
};

export default command;
