const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Online');
});

client.on("message", function(message) {
   if (message.content.startsWith("ping ")) {	
	   message.channel.send('pong');
   }
});


client.login(process.env.BOT_TOKEN);
