const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Online');
});

client.on('message', msg => {
    if (msg.content === 'ping') {
    	client.sendMessage{(
		message: 'pong'
	});
    }
});


client.login(process.env.BOT_TOKEN);
