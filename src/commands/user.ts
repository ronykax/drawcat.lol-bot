import { SlashCommandSubcommandBuilder } from "discord.js";
import type { Command } from "../types";

const command: Command = {
    data: new SlashCommandSubcommandBuilder()
        .setName("user")
        .setDescription("get a user's info")
        .addStringOption((option) =>
            option
                .setName("user")
                .setDescription(
                    "email or uuid of the user you want to get the information of"
                )
                .setRequired(true)
        ),
    async run(interaction) {},
};

export default command;
