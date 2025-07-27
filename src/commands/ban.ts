import { SlashCommandSubcommandBuilder } from "discord.js";
import type { Command } from "../types";

const command: Command = {
    data: new SlashCommandSubcommandBuilder()
        .setName("ban")
        .setDescription("ban a user")
        .addStringOption((option) =>
            option
                .setName("user")
                .setDescription(
                    "email or uuid of the user you want to ban"
                )
                .setRequired(true)
        ),
    async run(interaction) {},
};

export default command;
