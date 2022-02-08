import { Client } from 'better-revolt-js'
import { token, prefix } from './config.js'

let client = new Client();
client.login(token)

client.once("ready", async () =>
    console.info(`Logged in as ${client.user.username}!`),
);

client.on("message", async (msg) => {
    console.info(`${Date.UTC.toString()} ${msg.user.username}: ${msg.content}`)

    if (message.content === "hello") {
        message.channel.sendMessage("world");
    }
});

client.on("something", async (something) => {
	
})

