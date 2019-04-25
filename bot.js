const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Online');
});

client.on('message', msg => {
    if (msg.content === 'ping') {
    	msg.reply('pong');
  	}
});

client.on('message', message => {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split('!');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'Zentrales Thanalan':
                client.sendMessage({
                    to: channelID,
                    message: 'Central Thanalan'
                });
			break;
        }
    }
});

client.login(process.env.BOT_TOKEN);
