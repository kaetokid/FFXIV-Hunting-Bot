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
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": Central Thanalan " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Östliches Thanalan")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": Eastern Thanalan " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Nördliches Thanalan")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": Northern Thanalan " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Südliches Thanalan")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": Southern Thanalan " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Westliches Thanalan")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": Western Thanalan " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Südwald")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": South Shroud " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Nordwald")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": North Shroud " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Ostwald")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": East Shroud " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Tiefer Wald")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": Central Shroud " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Westliches La Noscea")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": Western La Noscea " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Oberes La Noscea")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": Upper La Noscea " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Äußeres La Noscea")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": Outer La Noscea " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Zentrales La Noscea")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": Middle La Noscea " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Unteres La Noscea")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": Lower La Noscea " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Östliches La Noscea")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": Eastern La Noscea " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Zentrales Hochland von Coerthas")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": Coerthas Central Highlands " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Westliches Hochland von Coerthas")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": Coerthas Western Highlands " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Wallende Nebel")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": The Churning Mists " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Dravanisches Hinterland")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": The Dravanian Hinterlands " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Dravanisches Vorland")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": The Dravanian Forelands " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Abalathisches Wolkenmeer")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": The Sea of Clouds " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Rubinsee")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": The Ruby Sea " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Die Zinnen")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": The Peaks " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Das Fenn")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": The Lochs " + coord);
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Abanisches Grenzland")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send(user + ": The Fringes " + coord);
		//console.log("coord: " + coord);
	}
});

bot.login(process.env.BOT_TOKEN);
