import { Client } from 'better-revolt-js'
import { token, prefix } from './config.mjs'

let client = new Client();
client.login(token)

client.once("ready", async () =>
    console.info(`Logged in as ${client.user.username}!`),
);

client.on("message", async (msg) => {
	if (!msg.server) {
		console.info(`${msg.author.username} > ${msg.content}\n{${msg.channel.name} | ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}}`)
	} else if (msg.author) {
		console.info(`${msg.author.username} > ${msg.content}\n{${msg.server.name}/${msg.channel.name} | ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}}`)
	} else {
		console.info(`${msg.author.username} > ${msg.content}\n{${msg.server.name}/${msg.channel.name} | ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}}`)		
	}



    if (msg.author) {
        console.info("True")
    } else {
    	console.info("False")
    }
});

client.on("server_member_join", async (member) => {
	console.info(`${member.username}`)
})
