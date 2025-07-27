import { REST, Routes, SlashCommandBuilder, type Client } from "discord.js";
import fs from "fs";
import path from "path";
import type { Command } from "../types";
import getEnv from "./get-env";

export default async function handleCommands(client: Client) {
    const files = fs.readdirSync(path.join(process.cwd(), "src", "commands"));

    const command = new SlashCommandBuilder()
        .setName("cat")
        .setDescription("cat commands");

    for (const file of files) {
        const filePath = path.join(process.cwd(), "src", "commands", file);
        const subCommand = (await import(filePath)).default as Command;

        command.addSubcommand(subCommand.data);
    }

    const rest = new REST({ version: "10" }).setToken(
        getEnv("DISCORD_CLIENT_TOKEN")
    );

    await rest.put(
        Routes.applicationGuildCommands(
            getEnv("DISCORD_CLIENT_ID"),
            getEnv("DISCORD_GUILD_ID")
        ),
        { body: [command] }
    );
}
