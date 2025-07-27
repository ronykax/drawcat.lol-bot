console.clear();

import { Client } from "discord.js";
import getEnv from "./utils/get-env";
import handleCommands from "./utils/handle-commands";

const client = new Client({ intents: [] });

client.once("ready", async () => {
    await handleCommands(client);
    console.log("app is online!");
});

client.login(getEnv("DISCORD_CLIENT_TOKEN"));