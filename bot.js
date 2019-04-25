const Discord = require('discord.js');
const client = new Discord.Client();
const BOT_TOKEN = proces.env.BOT_TOKEN

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg => {
    if (msg.content === 'ping') {
    	msg.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(BOT_TOKEN).catch(err => console.log(err));
