const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('${bot.user.tag} is Online');
});


//bot.on("message", function(message) {
//   if (message.content.startsWith("Zentrales Thanalan ")) {	
//	   message.channel.send('Central Thanalan');
//   }
//});

bot.on("message", area => {
	if (area.content.startsWith("Zentrales Thanalan")) {
		const coord = area.content.slice(area.length).split(/ +/);
		area.channel.send("Central Thanalan " + coord);
		console.log("String: " + coord);
	}		
});

bot.login(process.env.BOT_TOKEN);
