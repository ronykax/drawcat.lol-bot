import { SlashCommandSubcommandBuilder } from "discord.js";
import type { Command } from "../types";

const command: Command = {
    data: new SlashCommandSubcommandBuilder()
        .setName("get")
        .setDescription("get a drawing")
        .addStringOption((option) =>
            option
                .setName("uuid")
                .setDescription(
                    "the uuid of the user you want to get the drawing of"
                )
                .setRequired(true)
        ),
    async run(interaction) {
    },
};

export default command;
