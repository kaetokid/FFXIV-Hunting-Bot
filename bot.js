const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Online');
});


//bot.on("message", function(message) {
//   if (message.content.startsWith("Zentrales Thanalan ")) {	
//	   message.channel.send('Central Thanalan');
//   }
//});

bot.on("message", area => {
	const coord = "";
	if (area.content.startsWith("Zentrales Thanalan ")) {
		coord = area.content.slice(area.length).split(/ +/);
		area.channel.send("Central Thanalan ${coord}" );
	}	
});

bot.login(process.env.BOT_TOKEN);
