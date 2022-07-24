// Require the necessary discord.js classes

const dotenv = require('dotenv').config()
const { Client, GatewayIntentBits, Collection, StickerPack } = require('discord.js');

const prefix = "?";


// Create a new client instance
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildVoiceStates
	],
});



client.on("messageCreate", message => {

	if(message.content === prefix + "test") {
		message.channel.send("salut");
	}

	if (message.content === prefix + "ping") {
		message.channel.send('Loading data').then (async (msg) =>{
			msg.delete()
			message.channel.send(`Ping is ${msg.createdTimestamp - message.createdTimestamp}`);
		  })
		  }

})


// Login to Discord with your client's token
client
.login(process.env.DISCORD_TOKEN)
.then(() => {
	console.log('Bot has started successfully');
	console.log('Logged in as',client.user.username);
	client.user.setActivity(`with ${client.guilds.cache.size} guild(s)`);
})
.catch((err) => console.log(err));

