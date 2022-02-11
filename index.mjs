import { Client } from 'better-revolt-js'
import { token, prefix } from './config.mjs'

let client = new Client();
client.login(token)

client.once("ready", async () =>
    console.info(`Logged in as ${client.user.username}!`),
);

client.on("message", async (msg) => {
	let serverMessage = false;
	let joinEvent = false;
	let groupMessage = false;

	if (msg.server) {
		if (!msg.author) {
			joinEvent = true;
			console.log(`Message type: join event`);
			return;
		} else {
			serverMessage = true;
			console.log(`Message type: server`)
		}
	} else {
	groupMessage = true;
	console.log(`Message type: group chat`)
	}

	if (groupMessage) {
		console.info(`${msg.author.username} > ${msg.content}\n{${msg.channel.name} | ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}}`)
	} else if (serverMessage) {
		console.info(`${msg.author.username} > ${msg.content}\n{${msg.server.name}/${msg.channel.name} | ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}}`)
	} else if (joinEvent) {
		console.info(`${msg.content}\n{${msg.server.name} | ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}}`)
	}

	// if (joinEvent) {}
});

client.on("member/join", async (member) => {
	console.info(`${member.username}`)
})
