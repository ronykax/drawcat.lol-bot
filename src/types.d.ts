import type { ChatInputCommandInteraction, SlashCommandSubcommandBuilder } from "discord.js";

interface Command {
    data: SlashCommandSubcommandBuilder;
    run: (interaction: ChatInputCommandInteraction) => Promise<void>;
}
