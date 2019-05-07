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
	
	if(report.content.includes("Mor Dhona") || report.content.includes("Azys Lla") || report.content.includes("Yanxia")) {
		if(report.author.bot) return;
		
		let user = report.guild.members.get(report.author.id).displayName;
		
		var embed = new Discord.RichEmbed()
			.addField("@here")
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb::flag_de::flag_fr: " + report.content)
			.setColor(0xFF0000)
		report.channel.send({embed});
		
		report.delete();
	}
	
	else if (report.content.includes("Central Thanalan") || report.content.includes("Zentrales Thanalan") || report.content.includes("Thanalan central")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Zentrales Thanalan"))
			edit_en = report.content.replace(/Zentrales Thanalan/gi, "Central Thanalan");
		else if (report.content.includes("Thanalan central"))
			edit_en = report.content.replace(/Thanalan central/gi, "Central Thanalan");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("Central Thanalan"))
			edit_de = report.content.replace(/Central Thanalan/gi, "Zentrales Thanalan");
		else if (report.content.includes("Thanalan central"))
			edit_de = report.content.replace(/Thanalan central/gi, "Zentrales Thanalan");
		else
			edit_de = report.content;
			
		if (report.content.includes("Central Thanalan"))
			edit_fr = report.content.replace(/Central Thanalan/gi, "Thanalan central");
		else if (report.content.includes("Zentrales Thanalan"))
			edit_fr = report.content.replace(/Zentrales Thanalan/gi, "Thanalan central");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}
	
	else if (report.content.includes("Eastern Thanalan") || report.content.includes("Östliches Thanalan") || report.content.includes("Thanalan oriental")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Östliches Thanalan"))
			edit_en = report.content.replace(/Östliches Thanalan/gi, "Eastern Thanalan");
		else if (report.content.includes("Thanalan oriental"))
			edit_en = report.content.replace(/Thanalan oriental/gi, "Eastern Thanalan");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("Eastern Thanalan"))
			edit_de = report.content.replace(/Eastern Thanalan/gi, "Östliches Thanalan");
		else if (report.content.includes("Thanalan oriental"))
			edit_de = report.content.replace(/Thanalan oriental/gi, "Östliches Thanalan");
		else
			edit_de = report.content;
			
		if (report.content.includes("Eastern Thanalan"))
			edit_fr = report.content.replace(/Eastern Thanalan/gi, "Thanalan oriental");
		else if (report.content.includes("Östliches Thanalan"))
			edit_fr = report.content.replace(/Östliches Thanalan/gi, "Thanalan oriental");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("Northern Thanalan") || report.content.includes("Nördliches Thanalan") || report.content.includes("Thanalan septentrional")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Nördliches Thanalan"))
			edit_en = report.content.replace(/Nördliches Thanalan/gi, "Northern Thanalan");
		else if (report.content.includes("Thanalan septentrional"))
			edit_en = report.content.replace(/Thanalan septentrional/gi, "Northern Thanalan");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("Northern Thanalan"))
			edit_de = report.content.replace(/Northern Thanalan/gi, "Nördliches Thanalan");
		else if (report.content.includes("Thanalan septentrional"))
			edit_de = report.content.replace(/Thanalan septentrional/gi, "Nördliches Thanalan");
		else
			edit_de = report.content;
			
		if (report.content.includes("Northern Thanalan"))
			edit_fr = report.content.replace(/Northern Thanalan/gi, "Thanalan septentrional");
		else if (report.content.includes("Nördliches Thanalan"))
			edit_fr = report.content.replace(/Nördliches Thanalan/gi, "Thanalan septentrional");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("Southern Thanalan") || report.content.includes("Südliches Thanalan") || report.content.includes("Thanalan méridional")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Südliches Thanalan"))
			edit_en = report.content.replace(/Südliches Thanalan/gi, "Southern Thanalan");
		else if (report.content.includes("Thanalan méridional"))
			edit_en = report.content.replace(/Thanalan méridional/gi, "Southern Thanalan");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("Southern Thanalan"))
			edit_de = report.content.replace(/Southern Thanalan/gi, "Südliches Thanalan");
		else if (report.content.includes("Thanalan septentrional"))
			edit_de = report.content.replace(/Thanalan méridional/gi, "Südliches Thanalan");
		else
			edit_de = report.content;
			
		if (report.content.includes("Southern Thanalan"))
			edit_fr = report.content.replace(/Southern Thanalan/gi, "Thanalan méridional");
		else if (report.content.includes("Südliches Thanalan"))
			edit_fr = report.content.replace(/Südliches Thanalan/gi, "Thanalan méridional");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("Western Thanalan") || report.content.includes("Westliches Thanalan") || report.content.includes("Thanalan occidental")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Westliches Thanalan"))
			edit_en = report.content.replace(/Westliches Thanalan/gi, "Western Thanalan");
		else if (report.content.includes("Thanalan occidental"))
			edit_en = report.content.replace(/Thanalan occidental/gi, "Western Thanalan");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("Western Thanalan"))
			edit_de = report.content.replace(/Western Thanalan/gi, "Westliches Thanalan");
		else if (report.content.includes("Thanalan occidental"))
			edit_de = report.content.replace(/Thanalan occidental/gi, "Westliches Thanalan");
		else
			edit_de = report.content;
			
		if (report.content.includes("Western Thanalan"))
			edit_fr = report.content.replace(/Western Thanalan/gi, "Thanalan occidental");
		else if (report.content.includes("Westliches Thanalan"))
			edit_fr = report.content.replace(/Westliches Thanalan/gi, "Thanalan occidental");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("South Shroud") || report.content.includes("Südwald") || report.content.includes("Forêt du sud")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Südwald"))
			edit_en = report.content.replace(/Südwald/gi, "South Shroud");
		else if (report.content.includes("Forêt du sud"))
			edit_en = report.content.replace(/Forêt du sud/gi, "South Shroud");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("South Shroud"))
			edit_de = report.content.replace(/South Shroud/gi, "Südwald");
		else if (report.content.includes("Forêt du sud"))
			edit_de = report.content.replace(/Forêt du sud/gi, "Südwald");
		else
			edit_de = report.content;
			
		if (report.content.includes("South Shroud"))
			edit_fr = report.content.replace(/South Shroud/gi, "Forêt du sud");
		else if (report.content.includes("Südwald"))
			edit_fr = report.content.replace(/Südwald/gi, "Forêt du sud");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("North Shroud") || report.content.includes("Nordwald") || report.content.includes("Forêt du nord")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Nordwald"))
			edit_en = report.content.replace(/Nordwald/gi, "North Shroud");
		else if (report.content.includes("Forêt du nord"))
			edit_en = report.content.replace(/Forêt du nord/gi, "North Shroud");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("North Shroud"))
			edit_de = report.content.replace(/North Shroud/gi, "Nordwald");
		else if (report.content.includes("Forêt du nord"))
			edit_de = report.content.replace(/Forêt du nord/gi, "Nordwald");
		else
			edit_de = report.content;
			
		if (report.content.includes("North Shroud"))
			edit_fr = report.content.replace(/North Shroud/gi, "Forêt du nord");
		else if (report.content.includes("Nordwald"))
			edit_fr = report.content.replace(/Nordwald/gi, "Forêt du nord");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("East Shroud") || report.content.includes("Ostwald") || report.content.includes("Forêt de l'est")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Ostwald"))
			edit_en = report.content.replace(/Ostwald/gi, "East Shroud");
		else if (report.content.includes("Forêt de l'est"))
			edit_en = report.content.replace(/Forêt de l'est/gi, "East Shroud");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("East Shroud"))
			edit_de = report.content.replace(/East Shroud/gi, "Ostwald");
		else if (report.content.includes("Forêt de l'est"))
			edit_de = report.content.replace(/Forêt de l'est/gi, "Ostwald");
		else
			edit_de = report.content;
			
		if (report.content.includes("East Shroud"))
			edit_fr = report.content.replace(/East Shroud/gi, "Forêt de l'est");
		else if (report.content.includes("Ostwald"))
			edit_fr = report.content.replace(/Ostwald/gi, "Forêt de l'est");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("Central Shroud") || report.content.includes("Tiefer Wald") || report.content.includes("Forêt centrale")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Tiefer Wald"))
			edit_en = report.content.replace(/Tiefer Wald/gi, "Central Shroud");
		else if (report.content.includes("Forêt centrale"))
			edit_en = report.content.replace(/Forêt centrale/gi, "Central Shroud");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("Central Shroud"))
			edit_de = report.content.replace(/Central Shroud/gi, "Tiefer Wald");
		else if (report.content.includes("Forêt centrale"))
			edit_de = report.content.replace(/Forêt centrale/gi, "Tiefer Wald");
		else
			edit_de = report.content;
			
		if (report.content.includes("Central Shroud"))
			edit_fr = report.content.replace(/Central Shroud/gi, "Forêt centrale");
		else if (report.content.includes("Tiefer Wald"))
			edit_fr = report.content.replace(/Tiefer Wald/gi, "Forêt centrale");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("Western La Noscea") || report.content.includes("Westliches La Noscea") || report.content.includes("Noscea occidentale")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Westliches La Noscea"))
			edit_en = report.content.replace(/Westliches La Noscea/gi, "Western La Noscea");
		else if (report.content.includes("Noscea occidentale"))
			edit_en = report.content.replace(/Noscea occidentale/gi, "Western La Noscea");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("Western La Noscea"))
			edit_de = report.content.replace(/Western La Noscea/gi, "Westliches La Noscea");
		else if (report.content.includes("Noscea occidentale"))
			edit_de = report.content.replace(/Noscea occidentale/gi, "Westliches La Noscea");
		else
			edit_de = report.content;
			
		if (report.content.includes("Western La Noscea"))
			edit_fr = report.content.replace(/Western La Noscea/gi, "Noscea occidentale");
		else if (report.content.includes("Westliches La Noscea"))
			edit_fr = report.content.replace(/Westliches La Noscea/gi, "Noscea occidentale");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("Upper La Noscea") || report.content.includes("Oberes La Noscea") || report.content.includes("Haute-Noscea")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Oberes La Noscea"))
			edit_en = report.content.replace(/Oberes La Noscea/gi, "Upper La Noscea");
		else if (report.content.includes("Haute-Noscea"))
			edit_en = report.content.replace(/Haute-Noscea/gi, "Upper La Noscea");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("Upper La Noscea"))
			edit_de = report.content.replace(/Upper La Noscea/gi, "Oberes La Noscea");
		else if (report.content.includes("Haute-Noscea"))
			edit_de = report.content.replace(/Haute-Noscea/gi, "Oberes La Noscea");
		else
			edit_de = report.content;
			
		if (report.content.includes("Upper La Noscea"))
			edit_fr = report.content.replace(/Upper La Noscea/gi, "Haute-Noscea");
		else if (report.content.includes("Oberes La Noscea"))
			edit_fr = report.content.replace(/Oberes La Noscea/gi, "Haute-Noscea");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("Outer La Noscea") || report.content.includes("Äußeres La Noscea") || report.content.includes("Noscea extérieure")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Äußeres La Noscea"))
			edit_en = report.content.replace(/Äußeres La Noscea/gi, "Outer La Noscea");
		else if (report.content.includes("Noscea extérieure"))
			edit_en = report.content.replace(/Noscea extérieure/gi, "Outer La Noscea");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("Outer La Noscea"))
			edit_de = report.content.replace(/Outer La Noscea/gi, "Äußeres La Noscea");
		else if (report.content.includes("Noscea extérieure"))
			edit_de = report.content.replace(/Noscea extérieure/gi, "Äußeres La Noscea");
		else
			edit_de = report.content;
			
		if (report.content.includes("Outer La Noscea"))
			edit_fr = report.content.replace(/Outer La Noscea/gi, "Noscea extérieure");
		else if (report.content.includes("Äußeres La Noscea"))
			edit_fr = report.content.replace(/Äußeres La Noscea/gi, "Noscea extérieure");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("Middle La Noscea") || report.content.includes("Zentrales La Noscea") || report.content.includes("Noscea centrale")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Zentrales La Noscea"))
			edit_en = report.content.replace(/Zentrales La Noscea/gi, "Middle La Noscea");
		else if (report.content.includes("Noscea centrale"))
			edit_en = report.content.replace(/Noscea centrale/gi, "Middle La Noscea");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("Middle La Noscea"))
			edit_de = report.content.replace(/Middle La Noscea/gi, "Zentrales La Noscea");
		else if (report.content.includes("Noscea centrale"))
			edit_de = report.content.replace(/Noscea centrale/gi, "Zentrales La Noscea");
		else
			edit_de = report.content;
			
		if (report.content.includes("Middle La Noscea"))
			edit_fr = report.content.replace(/Middle La Noscea/gi, "Noscea centrale");
		else if (report.content.includes("Zentrales La Noscea"))
			edit_fr = report.content.replace(/Zentrales La Noscea/gi, "Noscea centrale");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("Lower La Noscea") || report.content.includes("Unteres La Noscea") || report.content.includes("Basse-Noscea")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Unteres La Noscea"))
			edit_en = report.content.replace(/Unteres La Noscea/gi, "Lower La Noscea");
		else if (report.content.includes("Basse-Noscea"))
			edit_en = report.content.replace(/Basse-Noscea/gi, "Lower La Noscea");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("Lower La Noscea"))
			edit_de = report.content.replace(/Lower La Noscea/gi, "Unteres La Noscea");
		else if (report.content.includes("Basse-Noscea"))
			edit_de = report.content.replace(/Basse-Noscea/gi, "Unteres La Noscea");
		else
			edit_de = report.content;
			
		if (report.content.includes("Lower La Noscea"))
			edit_fr = report.content.replace(/Lower La Noscea/gi, "Basse-Noscea");
		else if (report.content.includes("Unteres La Noscea"))
			edit_fr = report.content.replace(/Unteres La Noscea/gi, "Basse-Noscea");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("Eastern La Noscea") || report.content.includes("Östliches La Noscea") || report.content.includes("Noscea orientale")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Östliches La Noscea"))
			edit_en = report.content.replace(/Östliches La Noscea/gi, "Eastern La Noscea");
		else if (report.content.includes("Noscea orientale"))
			edit_en = report.content.replace(/Noscea orientale/gi, "Eastern La Noscea");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("Eastern La Noscea"))
			edit_de = report.content.replace(/Eastern La Noscea/gi, "Östliches La Noscea");
		else if (report.content.includes("Noscea orientale"))
			edit_de = report.content.replace(/Noscea orientale/gi, "Östliches La Noscea");
		else
			edit_de = report.content;
			
		if (report.content.includes("Eastern La Noscea"))
			edit_fr = report.content.replace(/Eastern La Noscea/gi, "Noscea orientale");
		else if (report.content.includes("Östliches La Noscea"))
			edit_fr = report.content.replace(/Östliches La Noscea/gi, "Noscea orientale");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("Coerthas Central Highlands") || report.content.includes("Zentrales Hochland von Coerthas") || report.content.includes("Hautes terres du Coerthas central")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Zentrales Hochland von Coerthas"))
			edit_en = report.content.replace(/Zentrales Hochland von Coerthas/gi, "Coerthas Central Highlands");
		else if (report.content.includes("Hautes terres du Coerthas central"))
			edit_en = report.content.replace(/Hautes terres du Coerthas central/gi, "Coerthas Central Highlands");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("Coerthas Central Highlands"))
			edit_de = report.content.replace(/Coerthas Central Highlands/gi, "Zentrales Hochland von Coerthas");
		else if (report.content.includes("Hautes terres du Coerthas central"))
			edit_de = report.content.replace(/Hautes terres du Coerthas central/gi, "Zentrales Hochland von Coerthas");
		else
			edit_de = report.content;
			
		if (report.content.includes("Coerthas Central Highlands"))
			edit_fr = report.content.replace(/Coerthas Central Highlands/gi, "Hautes terres du Coerthas central");
		else if (report.content.includes("Zentrales Hochland von Coerthas"))
			edit_fr = report.content.replace(/Zentrales Hochland von Coerthas/gi, "Hautes terres du Coerthas central");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("Coerthas Western Highlands") || report.content.includes("Westliches Hochland von Coerthas") || report.content.includes("Hautes terres du Coerthas occidental")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Westliches Hochland von Coerthas"))
			edit_en = report.content.replace(/Westliches Hochland von Coerthas/gi, "Coerthas Western Highlands");
		else if (report.content.includes("Hautes terres du Coerthas occidental"))
			edit_en = report.content.replace(/Hautes terres du Coerthas occidental/gi, "Coerthas Western Highlands");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("Coerthas Western Highlands"))
			edit_de = report.content.replace(/Coerthas Western Highlands/gi, "Westliches Hochland von Coerthas");
		else if (report.content.includes("Hautes terres du Coerthas occidental"))
			edit_de = report.content.replace(/Hautes terres du Coerthas occidental/gi, "Westliches Hochland von Coerthas");
		else
			edit_de = report.content;
			
		if (report.content.includes("Coerthas Western Highlands"))
			edit_fr = report.content.replace(/Coerthas Western Highlands/gi, "Hautes terres du Coerthas occidental");
		else if (report.content.includes("Westliches Hochland von Coerthas"))
			edit_fr = report.content.replace(/Westliches Hochland von Coerthas/gi, "Hautes terres du Coerthas occidental");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("The Churning Mists") || report.content.includes("Wallende Nebel") || report.content.includes("L'Écume des cieux de Dravania")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Wallende Nebel"))
			edit_en = report.content.replace(/Wallende Nebel/gi, "The Churning Mists");
		else if (report.content.includes("L'Écume des cieux de Dravania"))
			edit_en = report.content.replace(/L'Écume des cieux de Dravania/gi, "The Churning Mists");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("The Churning Mists"))
			edit_de = report.content.replace(/The Churning Mists/gi, "Wallende Nebel");
		else if (report.content.includes("L'Écume des cieux de Dravania"))
			edit_de = report.content.replace(/L'Écume des cieux de Dravania/gi, "Wallende Nebel");
		else
			edit_de = report.content;
			
		if (report.content.includes("The Churning Mists"))
			edit_fr = report.content.replace(/The Churning Mists/gi, "L'Écume des cieux de Dravania");
		else if (report.content.includes("Wallende Nebel"))
			edit_fr = report.content.replace(/Wallende Nebel/gi, "L'Écume des cieux de Dravania");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("The Dravanian Hinterlands") || report.content.includes("Dravanisches Hinterland") || report.content.includes("Arrière-pays dravanien")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Dravanisches Hinterland"))
			edit_en = report.content.replace(/Dravanisches Hinterland/gi, "The Dravanian Hinterlands");
		else if (report.content.includes("Arrière-pays dravanien"))
			edit_en = report.content.replace(/Arrière-pays dravanien/gi, "The Dravanian Hinterlands");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("The Dravanian Hinterlands"))
			edit_de = report.content.replace(/The Dravanian Hinterlands/gi, "Dravanisches Hinterland");
		else if (report.content.includes("Arrière-pays dravanien"))
			edit_de = report.content.replace(/Arrière-pays dravanien/gi, "Dravanisches Hinterland");
		else
			edit_de = report.content;
			
		if (report.content.includes("The Dravanian Hinterlands"))
			edit_fr = report.content.replace(/The Dravanian Hinterlands/gi, "Arrière-pays dravanien");
		else if (report.content.includes("Dravanisches Hinterland"))
			edit_fr = report.content.replace(/Dravanisches Hinterland/gi, "Arrière-pays dravanien");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("The Dravanian Forelands") || report.content.includes("Dravanisches Vorland") || report.content.includes("Avant-pays dravanien")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Dravanisches Vorland"))
			edit_en = report.content.replace(/Dravanisches Vorland/gi, "The Dravanian Forelands");
		else if (report.content.includes("Avant-pays dravanien"))
			edit_en = report.content.replace(/Avant-pays dravanien/gi, "The Dravanian Forelands");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("The Dravanian Forelands"))
			edit_de = report.content.replace(/The Dravanian Forelands/gi, "Dravanisches Vorland");
		else if (report.content.includes("Avant-pays dravanien"))
			edit_de = report.content.replace(/Avant-pays dravanien/gi, "Dravanisches Vorland");
		else
			edit_de = report.content;
			
		if (report.content.includes("The Dravanian Forelands"))
			edit_fr = report.content.replace(/The Dravanian Forelands/gi, "Avant-pays dravanien");
		else if (report.content.includes("Dravanisches Vorland"))
			edit_fr = report.content.replace(/Dravanisches Vorland/gi, "Avant-pays dravanien");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("The Sea of Clouds") || report.content.includes("Abalathisches Wolkenmeer") || report.content.includes("L'Écume des cieux d'Abalathia")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Abalathisches Wolkenmeer"))
			edit_en = report.content.replace(/Abalathisches Wolkenmeer/gi, "The Sea of Clouds");
		else if (report.content.includes("L'Écume des cieux d'Abalathia"))
			edit_en = report.content.replace(/L'Écume des cieux d'Abalathia/gi, "The Sea of Clouds");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("The Sea of Clouds"))
			edit_de = report.content.replace(/The Sea of Clouds/gi, "Abalathisches Wolkenmeer");
		else if (report.content.includes("L'Écume des cieux d'Abalathia"))
			edit_de = report.content.replace(/L'Écume des cieux d'Abalathia/gi, "Abalathisches Wolkenmeer");
		else
			edit_de = report.content;
			
		if (report.content.includes("The Sea of Clouds"))
			edit_fr = report.content.replace(/The Sea of Clouds/gi, "L'Écume des cieux d'Abalathia");
		else if (report.content.includes("Abalathisches Wolkenmeer"))
			edit_fr = report.content.replace(/Abalathisches Wolkenmeer/gi, "L'Écume des cieux d'Abalathia");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("The Ruby Sea") || report.content.includes("Rubinsee") || report.content.includes("Mer de Rubis")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Rubinsee"))
			edit_en = report.content.replace(/Rubinsee/gi, "The Ruby Sea");
		else if (report.content.includes("Mer de Rubis"))
			edit_en = report.content.replace(/Mer de Rubis/gi, "The Ruby Sea");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("The Ruby Sea"))
			edit_de = report.content.replace(/The Ruby Sea/gi, "Rubinsee");
		else if (report.content.includes("Mer de Rubis"))
			edit_de = report.content.replace(/Mer de Rubis/gi, "Rubinsee");
		else
			edit_de = report.content;
			
		if (report.content.includes("The Ruby Sea"))
			edit_fr = report.content.replace(/The Ruby Sea/gi, "Mer de Rubis");
		else if (report.content.includes("Rubinsee"))
			edit_fr = report.content.replace(/Rubinsee/gi, "Mer de Rubis");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("The Azim Steppe") || report.content.includes("Azim-Steppe") || report.content.includes("Steppe d'Azim")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Azim-Steppe"))
			edit_en = report.content.replace(/Azim-Steppe/gi, "The Azim Steppe");
		else if (report.content.includes("Steppe d'Azim"))
			edit_en = report.content.replace(/Steppe d'Azim/gi, "The Azim Steppe");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("The Azim Steppe"))
			edit_de = report.content.replace(/The Azim Steppe/gi, "Azim-Steppe");
		else if (report.content.includes("Steppe d'Azim"))
			edit_de = report.content.replace(/Steppe d'Azim/gi, "Azim-Steppe");
		else
			edit_de = report.content;
			
		if (report.content.includes("The Azim Steppe"))
			edit_fr = report.content.replace(/The Azim Steppe/gi, "Steppe d'Azim");
		else if (report.content.includes("Azim-Steppe"))
			edit_fr = report.content.replace(/Azim-Steppe/gi, "Steppe d'Azim");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("The Peaks") || report.content.includes("Die Zinnen") || report.content.includes("Les Pics")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Die Zinnen"))
			edit_en = report.content.replace(/Die Zinnen/gi, "The Peaks");
		else if (report.content.includes("Les Pics"))
			edit_en = report.content.replace(/Les Pics/gi, "The Peaks");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("The Peaks"))
			edit_de = report.content.replace(/The Peaks/gi, "Die Zinnen");
		else if (report.content.includes("Les Pics"))
			edit_de = report.content.replace(/Les Pics/gi, "Die Zinnen");
		else
			edit_de = report.content;
			
		if (report.content.includes("The Peaks"))
			edit_fr = report.content.replace(/The Peaks/gi, "Les Pics");
		else if (report.content.includes("Die Zinnen"))
			edit_fr = report.content.replace(/Die Zinnen/gi, "Les Pics");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("The Lochs") || report.content.includes("Das Fenn") || report.content.includes("Les Lacs")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Das Fenn"))
			edit_en = report.content.replace(/Das Fenn/gi, "The Lochs");
		else if (report.content.includes("Les Lacs"))
			edit_en = report.content.replace(/Les Lacs/gi, "The Lochs");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("The Lochs"))
			edit_de = report.content.replace(/The Lochs/gi, "Das Fenn");
		else if (report.content.includes("Les Lacs"))
			edit_de = report.content.replace(/Les Lacs/gi, "Das Fenn");
		else
			edit_de = report.content;
			
		if (report.content.includes("The Lochs"))
			edit_fr = report.content.replace(/The Lochs/gi, "Les Lacs");
		else if (report.content.includes("Das Fenn"))
			edit_fr = report.content.replace(/Das Fenn/gi, "Les Lacs");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}

	else if (report.content.includes("The Fringes") || report.content.includes("Abanisches Grenzland") || report.content.includes("Les Marges")) {
		if(report.author.bot) return; 
		
		let user = report.guild.members.get(report.author.id).displayName;
		let edit_en = "";
		let edit_de = "";
		let edit_fr = "";
		
		if (report.content.includes("Abanisches Grenzland"))
			edit_en = report.content.replace(/Abanisches Grenzland/gi, "The Fringes");
		else if (report.content.includes("Les Marges"))
			edit_en = report.content.replace(/Les Marges/gi, "The Fringes");
		else
			edit_en = report.content;
			
			
		if (report.content.includes("The Fringes"))
			edit_de = report.content.replace(/The Fringes/gi, "Abanisches Grenzland");
		else if (report.content.includes("Les Marges"))
			edit_de = report.content.replace(/Les Marges/gi, "Abanisches Grenzland");
		else
			edit_de = report.content;
			
		if (report.content.includes("The Fringes"))
			edit_fr = report.content.replace(/The Fringes/gi, "Les Marges");
		else if (report.content.includes("Abanisches Grenzland"))
			edit_fr = report.content.replace(/Abanisches Grenzland/gi, "Les Marges");
		else
			edit_fr = report.content;
			
			
		report.delete();
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
		report.channel.send({embed});
	}
});

bot.login(process.env.BOT_TOKEN);
