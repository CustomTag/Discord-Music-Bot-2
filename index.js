/**
 * Module Imports
 */
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX, MUSIC_CHANNEL_ID } = require("./config");
const { MessageEmbed } = require('discord.js');
const express = require('express');
const app = express();

app.get("/", (request, response) => {
	response.sendStatus(200);
});
app.listen(8080);

client.login(TOKEN);
client.commands = new discord.Collection();
client.prefix = PREFIX;
client.queue = new Map();

/**
 * Client Events
 */
client.on("ready", () => {
	console.log(`${client.user.username} ready!`);
	client.user.setActivity(`with everyone's KolbICE`);
});
client.on("warn", info => console.log(info));
client.on("error", console.error);

/**
 * Import all commands
 */
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
	const command = require(join(__dirname, "commands", `${file}`));
	client.commands.set(command.name, command);
}

client.on("message", async message => {
	if (message.author.bot) return;
	if (!message.guild) return;

	if (message.content.startsWith(PREFIX)) {
		if (message.deletable) {
			message.delete();
		}

		if (message.channel.id != MUSIC_CHANNEL_ID) {
			message.delete();

			let commandErrorEmbed = new MessageEmbed()
				.setTitle("Error")
				.setDescription("I can only work in music channel.")

			return message.channel.send(commandErrorEmbed).then((msg) => {
				setTimeout(() => {
					if(msg.deletable){
						msg.delete();
					}
				}, 10000);
			})
				.catch(console.error);
		}

		const args = message.content
			.slice(PREFIX.length)
			.trim()
			.split(/ +/);
		const command = args.shift().toLowerCase();

		if (!client.commands.has(command)) return;

		try {
			client.commands.get(command).execute(message, args);
		} catch (error) {
			console.error(error);
			message.reply("There was an error executing that command.").catch(console.error);
		}
	}
});
