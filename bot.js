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

bot.on("message", report => {
	if (report.content.includes("Central Thanalan" || "Zentrales Thanalan" || "Thanalan central")) {
		//const coord = report.content.slice(18,report.length);
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = report.content.replace(/Zentrales Thanalan/gi || /Thanalan central/gi, "Central Thanalan");
		let edit_de = report.content.replace(/Central Thanalan/gi || /Thanalan central/gi, "Zentrales Thanalan");
		let edit_fr = report.content.replace(/Central Thanalan/gi || /Zentrales Thanalan/gi, "Thanalan central");
		//console.log("user: " + user);
		report.delete();
		report.channel.send("```" + user + ":\n" + edit_en + "\n" + edit_de + "\n" + edit_fr + "\n" + "```");
		//console.log("coord: " + coord);
	}
	
	else if (report.content.startsWith("Östliches Thanalan" || "Thanalan oriental")) {
		const coord = report.content.slice(18,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": Eastern Thanalan " + coord);
	}
	
	else if (report.content.startsWith("Nördliches Thanalan" || "Thanalan septentrional")) {
		const coord = report.content.slice(19,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": Northern Thanalan " + coord);
	}
	
	else if (report.content.startsWith("Südliches Thanalan" || "Thanalan méridional")) {
		const coord = report.content.slice(18,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": Southern Thanalan " + coord);
	}
	
	else if (report.content.startsWith("Westliches Thanalan" || "Thanalan occidental")) {
		const coord = report.content.slice(19,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": Western Thanalan " + coord);
	}
	
	else if (report.content.startsWith("Südwald" || "Forêt du sud")) {
		const coord = report.content.slice(7,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": South Shroud " + coord);
	}
	
	else if (report.content.startsWith("Nordwald" || "Forêt du nord")) {
		const coord = report.content.slice(8,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": North Shroud " + coord);
	}
	
	else if (report.content.startsWith("Ostwald" || "Forêt de l'est")) {
		const coord = report.content.slice(7,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": East Shroud " + coord);
	}
	
	else if (report.content.startsWith("Tiefer Wald" || "Forêt centrale")) {
		const coord = report.content.slice(11,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": Central Shroud " + coord);
	}
	
	else if (report.content.startsWith("Westliches La Noscea" || "Noscea occidentale")) {
		const coord = report.content.slice(20,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": Western La Noscea " + coord);
	}
	
	else if (report.content.startsWith("Oberes La Noscea" || "Haute-Noscea")) {
		const coord = report.content.slice(16,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": Upper La Noscea " + coord);
	}
	
	else if (report.content.startsWith("Äußeres La Noscea" || "Noscea extérieure")) {
		const coord = report.content.slice(17,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": Outer La Noscea " + coord);
	}
	
	else if (report.content.startsWith("Zentrales La Noscea" || "Noscea centrale")) {
		const coord = report.content.slice(19,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": Middle La Noscea " + coord);
	}
	
	else if (report.content.startsWith("Unteres La Noscea" || "Basse-Noscea")) {
		const coord = report.content.slice(17,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": Lower La Noscea " + coord);
	}
	
	else if (report.content.startsWith("Östliches La Noscea" || "Noscea orientale")) {
		const coord = report.content.slice(19,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": Eastern La Noscea " + coord);
	}
	
	else if (report.content.startsWith("Zentrales Hochland von Coerthas" || "Hautes terres du Coerthas central")) {
		const coord = report.content.slice(31,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": Coerthas Central Highlands " + coord);
	}
	
	else if (report.content.startsWith("Westliches Hochland von Coerthas" || "Hautes terres du Coerthas occidental")) {
		const coord = report.content.slice(32,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": Coerthas Western Highlands " + coord);
	}
	
	else if (report.content.startsWith("Wallende Nebel" || "L'Écume des cieux de Dravania")) {
		const coord = report.content.slice(14,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": The Churning Mists " + coord);
	}
	
	else if (report.content.startsWith("Dravanisches Hinterland" || "Arrière-pays dravanien")) {
		const coord = report.content.slice(23,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": The Dravanian Hinterlands " + coord);
	}
	
	else if (report.content.startsWith("Dravanisches Vorland" || "Avant-pays dravanien")) {
		const coord = report.content.slice(20,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": The Dravanian Forelands " + coord);
	}
	
	else if (report.content.startsWith("Abalathisches Wolkenmeer" || "L'Écume des cieux d'Abalathia")) {
		const coord = report.content.slice(24,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": The Sea of Clouds " + coord);
	}
	
	else if (report.content.startsWith("Rubinsee" || "Mer de Rubis")) {
		const coord = report.content.slice(8,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": The Ruby Sea " + coord);
	}
	
	else if (report.content.startsWith("Azim-Steppe" || "Steppe d'Azim")) {
		const coord = report.content.slice(8,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": The Azim Steppe " + coord);
	}
	
	else if (report.content.startsWith("Die Zinnen" || "Les Pics")) {
		const coord = report.content.slice(10,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": The Peaks " + coord);
	}
	
	else if (report.content.startsWith("Das Fenn" || "Les Lacs")) {
		const coord = report.content.slice(8,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": The Lochs " + coord);
	}
	
	else if (report.content.startsWith("Abanisches Grenzland" || "Les Marges")) {
		const coord = report.content.slice(20,report.length);
		
		let user = report.guild.members.get(report.author.id).displayName;
		report.delete();
		report.channel.send(user + ": The Fringes " + coord);
	}
});

bot.login(process.env.BOT_TOKEN);
