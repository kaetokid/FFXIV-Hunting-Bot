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
		let user = area.author;
		console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": Central Thanalan " + coord);
		//console.log("coord: " + coord);
	}		
});

bot.login(process.env.BOT_TOKEN);
