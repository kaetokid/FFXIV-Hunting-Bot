const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log("> " + bot.user.tag + " <" + " is Online.");
});


//bot.on("message", function(message) {
//   if (message.content.startsWith("Zentrales Thanalan ")) {	
//	   message.channel.send('Central Thanalan');
//   }
//});

bot.on("message", area => {
	if (area.content.startsWith("Zentrales Thanalan")) {
		const coord = area.content.slice(18,area.length);
		area.delete(1000);
		area.channel.send(user.mention + ": Central Thanalan " + coord);
		//console.log("String: " + coord);
	}		
});

bot.login(process.env.BOT_TOKEN);
