const Discord = require('discord.js');
const bot = new Discord.Client();



bot.on('ready', () => {
    console.log("> " + bot.user.tag + " <" + " is Online.");
});


// Hunt-Reports
bot.on("message", report => {
	
	if(report.content.startsWith(">")) return;
	
	if(report.content.includes("Mor Dhona") || report.content.includes("Azys Lla") || report.content.includes("Yanxia")) {
		if(report.author.bot) return;
		
		let user = report.guild.members.get(report.author.id).displayName;
		
		var embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb::flag_de::flag_fr: " + report.content)
			.setColor(0xFF0000)
		//report.channel.send("@here");
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
			//.setImage("https://i.imgtc.com/mpeyqjk.png")
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
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
		//report.channel.send("@here");
		report.channel.send({embed});
	}
});


// Region-Maps with Hunt-Spawnpoints
bot.on("message", map =>
{
	if(map.channel.name == "test")
	{
		if(map.author.bot) return;
	
	
		if (map.content == ">Mor Dhona")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/3m2Vhvo.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">Central Thanalan" || map.content == ">Zentrales Thanalan" || map.content == ">Thanalan central")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/mpeyqjk.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">Eastern Thanalan" || map.content == ">Östliches Thanalan" || map.content == ">Thanalan oriental")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/PiSleYN.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">Northern Thanalan" || map.content == ">Nördliches Thanalan" || map.content == ">Thanalan septentrional")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/gpSqTrv.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">Southern Thanalan" || map.content == ">Südliches Thanalan" || map.content == ">Thanalan méridional")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/9GC5edr.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">Western Thanalan" || map.content = ">Westliches Thanalan" || map.content == ">Thanalan occidental")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/KFMRkQX.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">South Shroud" || map.content == ">Südwald" || map.content == ">Forêt du sud")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/35n6lPQ.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">North Shroud" || map.content == ">Nordwald" || map.content == ">Forêt du nord")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/7SL0gym.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">East Shroud" || map.content == ">Ostwald" || map.content == ">Forêt de l'est")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/inMDorM.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">Central Shroud" || map.content == ">Tiefer Wald" || map.content == ">Forêt centrale")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/UnXxMS1.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">Western La Noscea" || map.content == ">Westliches La Noscea" || map.content == ">Noscea occidentale")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/RdWeObN.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">Upper La Noscea" || map.content == ">Oberes La Noscea" || map.content == ">Haute-Noscea")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/y0brsLf.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">Outer La Noscea" || map.content == ">Äußeres La Noscea" || map.content == ">Noscea extérieure")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/PSOTCrs.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">Middle La Noscea" || map.content == ">Zentrales La Noscea" || map.content == ">Noscea centrale")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/Pl3Lc2f.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">Lower La Noscea" || map.content == ">Unteres La Noscea" || map.content == ">Basse-Noscea")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/jPdsXE2.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">Eastern La Noscea" || map.content == ">Östliches La Noscea" || map.content == ">Noscea orientale")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/zDoE5IR.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">Coerthas Central Highlands" || map.content == ">Zentrales Hochland von Coerthas" || map.content == ">Hautes terres du Coerthas central")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/QSHKW98.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">Coerthas Western Highlands" || map.content == ">Westliches Hochland von Coerthas" || map.content == ">Hautes terres du Coerthas occidental")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/C3lvS45.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">The Churning Mists" || map.content == ">Wallende Nebel" || map.content == "L'Écume des cieux de Dravania")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/mxI5aeI.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">The Dravanian Hinterlands" || map.content == ">Dravanisches Hinterland" || map.content == ">Arrière-pays dravanien")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/LPGK9Lc.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">The Dravanian Forelands" || map.content == ">Dravanisches Vorland" || map.content == ">Avant-pays dravanien")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/tTq1EeA.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">The Sea of Clouds" || map.content == ">Abalathisches Wolkenmeer" || map.content == ">L'Écume des cieux d'Abalathia")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/ZUZiEsa.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">Azys Lla")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/Uk4E0Mk.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">The Ruby Sea" || map.content == ">Rubinsee" || map.content == ">Mer de Rubis")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/HK2m66j.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">The Azim Steppe" || map.content == ">Azim-Steppe" || map.content == ">Steppe d'Azim")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/vR1xvEX.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">Yanxia")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/iiQhkHE.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">The Peaks" || map.content == ">Die Zinnen" || map.content == ">Les Pics")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/9VHVpkR.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">The Lochs" || map.content == ">Das Fenn" || map.content == ">Les Lacs")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/xAYa0xf.png")
			
			map.author.send({embed})
			map.delete();
		}
		
		else if (map.content == ">The Fringes" || map.content == ">Abanisches Grenzland" || map.content == ">Les Marges")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + map.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/6mn0Q0Q.png")
			
			map.author.send({embed})
			map.delete();
		}
	}
});


// Hunt-Spawnpoints
bot.on("message", hunt =>
{
	if(hunt.channel.name == "test")
	{
		if(hunt.author.bot) return;
	
	
		if (hunt.content.startsWith(">Agrippa")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + hunt.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/UUk87Dn.png")
			
			hunt.author.send({embed})
			hunt.delete();
		}
		
		else if (hunt.content == ">Kurrea")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + hunt.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/8qUFCS3.png")
			
			hunt.author.send({embed})
			hunt.delete();
		}
		
		else if (hunt.content == ">Leech King" || hunt.content == ">Egelkönig")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + hunt.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/JQfNhCQ.png")
			
			hunt.author.send({embed})
			hunt.delete();
		}
		
		else if (hunt.content == ">Brontes")
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + hunt.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/UnXl3tH.png")
			
			hunt.author.send({embed})
			hunt.delete();
		}
		
		else if (hunt.content.startsWith(">Sabotender") || hunt.content.toLowerCase.startsWith(">Pampa"))
		{
			var embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + hunt.content.slice(1))
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/sXdlAlt.png")
			
			hunt.author.send({embed})
			hunt.delete();
		}
	}
});


// Role-Assignment
bot.on("message", role =>
{
	if(role.channel.name == "role-assignment")
	{
		if(role.author.bot) return;
		
		
		if (role.content == "+deutsch")
		{	
			// \@ROLE to get the id & "mention" has to be allowed
			//role.member.addRole("575512648117125143");
			const userRole = role.guild.roles.find("name", "-deutsch-");
			role.member.addRole(userRole);
			
			role.delete();
			
			role.author.send("Du hast nun Zugriff auf den deutschen Text-Channel und die deutschen Sprach-Channel.");
		}
	
		else if (role.content == "+english")
		{
			//role.member.addRole("575512651879153685");
			const userRole = role.guild.roles.find("name", "-english-");
			role.member.addRole(userRole);
			
			role.delete();
			
			role.author.send("You now have access to the enlgish text-channel and the english voice-channels.");
		}
	
		else if (role.content == "+français" || role.content == "+francais")
		{
			//role.member.addRole("575512655201042442");
			const userRole = role.guild.roles.find("name", "-français-");
			role.member.addRole(userRole);
			
			role.delete();
			
			role.author.send("Vous avez maintenant accès au canal de texte français et aux canaux de langue française.");
		}
	
		else if (role.content == "-deutsch")
		{
			const userRole = role.guild.roles.find("name", "-deutsch-");
			role.member.removeRole(userRole);
			
			role.delete();
			
			role.author.send("You have revoked the language setting.");
		}
		
		else if (role.content == "-english")
		{
			const userRole = role.guild.roles.find("name", "-english-");
			role.member.removeRole(userRole);
			
			role.delete();
			
			role.author.send("You have revoked the language setting.");
		}
		
		else if (role.content == "-français" || role.content == "-francais")
		{
			const userRole = role.guild.roles.find("name", "-français-");
			role.member.removeRole(userRole);
			
			role.delete();
			
			role.author.send("You have revoked the language setting.");
		}
		
		else
		{
			role.delete();
			role.author.send("You have sent an invalid command!");
		}
	}
});


bot.login(process.env.BOT_TOKEN);
