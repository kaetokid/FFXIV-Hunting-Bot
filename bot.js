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
	if (area.content.include("Zentrales Thanalan" || "Thanalan central")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		//console.log("user: " + user);
		area.delete();
		area.channel.send("```" + "${message.author.username}:" + "\n Central Thanalan " + coord + "\n Zentrales Thanalan " + coord + "\n Thanalan central " + coord + "```");
		//console.log("coord: " + coord);
	}
	
	else if (area.content.startsWith("Östliches Thanalan" || "Thanalan oriental")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": Eastern Thanalan " + coord);
	}
	
	else if (area.content.startsWith("Nördliches Thanalan" || "Thanalan septentrional")) {
		const coord = area.content.slice(19,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": Northern Thanalan " + coord);
	}
	
	else if (area.content.startsWith("Südliches Thanalan" || "Thanalan méridional")) {
		const coord = area.content.slice(18,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": Southern Thanalan " + coord);
	}
	
	else if (area.content.startsWith("Westliches Thanalan" || "Thanalan occidental")) {
		const coord = area.content.slice(19,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": Western Thanalan " + coord);
	}
	
	else if (area.content.startsWith("Südwald" || "Forêt du sud")) {
		const coord = area.content.slice(7,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": South Shroud " + coord);
	}
	
	else if (area.content.startsWith("Nordwald" || "Forêt du nord")) {
		const coord = area.content.slice(8,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": North Shroud " + coord);
	}
	
	else if (area.content.startsWith("Ostwald" || "Forêt de l'est")) {
		const coord = area.content.slice(7,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": East Shroud " + coord);
	}
	
	else if (area.content.startsWith("Tiefer Wald" || "Forêt centrale")) {
		const coord = area.content.slice(11,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": Central Shroud " + coord);
	}
	
	else if (area.content.startsWith("Westliches La Noscea" || "Noscea occidentale")) {
		const coord = area.content.slice(20,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": Western La Noscea " + coord);
	}
	
	else if (area.content.startsWith("Oberes La Noscea" || "Haute-Noscea")) {
		const coord = area.content.slice(16,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": Upper La Noscea " + coord);
	}
	
	else if (area.content.startsWith("Äußeres La Noscea" || "Noscea extérieure")) {
		const coord = area.content.slice(17,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": Outer La Noscea " + coord);
	}
	
	else if (area.content.startsWith("Zentrales La Noscea" || "Noscea centrale")) {
		const coord = area.content.slice(19,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": Middle La Noscea " + coord);
	}
	
	else if (area.content.startsWith("Unteres La Noscea" || "Basse-Noscea")) {
		const coord = area.content.slice(17,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": Lower La Noscea " + coord);
	}
	
	else if (area.content.startsWith("Östliches La Noscea" || "Noscea orientale")) {
		const coord = area.content.slice(19,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": Eastern La Noscea " + coord);
	}
	
	else if (area.content.startsWith("Zentrales Hochland von Coerthas" || "Hautes terres du Coerthas central")) {
		const coord = area.content.slice(31,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": Coerthas Central Highlands " + coord);
	}
	
	else if (area.content.startsWith("Westliches Hochland von Coerthas" || "Hautes terres du Coerthas occidental")) {
		const coord = area.content.slice(32,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": Coerthas Western Highlands " + coord);
	}
	
	else if (area.content.startsWith("Wallende Nebel" || "L'Écume des cieux de Dravania")) {
		const coord = area.content.slice(14,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": The Churning Mists " + coord);
	}
	
	else if (area.content.startsWith("Dravanisches Hinterland" || "Arrière-pays dravanien")) {
		const coord = area.content.slice(23,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": The Dravanian Hinterlands " + coord);
	}
	
	else if (area.content.startsWith("Dravanisches Vorland" || "Avant-pays dravanien")) {
		const coord = area.content.slice(20,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": The Dravanian Forelands " + coord);
	}
	
	else if (area.content.startsWith("Abalathisches Wolkenmeer" || "L'Écume des cieux d'Abalathia")) {
		const coord = area.content.slice(24,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": The Sea of Clouds " + coord);
	}
	
	else if (area.content.startsWith("Rubinsee" || "Mer de Rubis")) {
		const coord = area.content.slice(8,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": The Ruby Sea " + coord);
	}
	
	else if (area.content.startsWith("Azim-Steppe" || "Steppe d'Azim")) {
		const coord = area.content.slice(8,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": The Azim Steppe " + coord);
	}
	
	else if (area.content.startsWith("Die Zinnen" || "Les Pics")) {
		const coord = area.content.slice(10,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": The Peaks " + coord);
	}
	
	else if (area.content.startsWith("Das Fenn" || "Les Lacs")) {
		const coord = area.content.slice(8,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": The Lochs " + coord);
	}
	
	else if (area.content.startsWith("Abanisches Grenzland" || "Les Marges")) {
		const coord = area.content.slice(20,area.length);
		
		let user = area.guild.members.get(area.author.id).displayName;
		area.delete();
		area.channel.send(user + ": The Fringes " + coord);
	}
});

bot.login(process.env.BOT_TOKEN);
