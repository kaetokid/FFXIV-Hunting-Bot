const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Online');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	client.sendMessage{(
		message: 'pong'
	});
    }
});


client.login(process.env.BOT_TOKEN);
