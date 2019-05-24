const Discord = require('discord.js');
const bot = new Discord.Client();



bot.on('ready', () => {
    console.log("> " + bot.user.tag + " <" + " is Online.");
});


// Auto-role New Member
bot.on('guildMemberAdd', newMember => {
  console.log('User' + newMember.user.tag + 'has joined the server!');

  let autoRole = newMember.guild.roles.find(newMember => newMember.name === "New Member");
  newMember.addRole(autoRole);
});


// Hunt-Reports
bot.on("message", report => {
	
	if(report.channel.name != "s-rank" && report.channel.name != "boss-fate"  && report.channel.name != ("a-rank-lich")  && report.channel.name != ("a-rank-odin")  && report.channel.name != ("a-rank-phoenix")  && report.channel.name != ("a-rank-shiva")  && report.channel.name != ("a-rank-zodiark")) return;
	else if(report.author.bot) return;
	
	let user = report.guild.members.get(report.author.id).displayName;
	let role = "";
	let edit_en = "";
	let edit_de = "";
	let edit_fr = "";
	let validation = 0;
	let embed;
	
	
	if(report.content.includes("Mor Dhona") || report.content.includes("Azys Lla") || report.content.includes("Yanxia"))
	{
		embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb::flag_de::flag_fr: " + report.content)
			.setColor(0xFF0000)
		
		report.delete();		
		
		if(report.channel.name == "s-rank" || report.channel.name == "boss-fate")
			report.channel.send("@here");
		else if(report.channel.name == "a-rank-lich")
		{
			role = report.guild.roles.find(report => report.name === "Lich");
			report.channel.send(role.toString());
		}
		else if(report.channel.name == "a-rank-odin")
		{
			role = report.guild.roles.find(report => report.name === "Odin");
			report.channel.send(role.toString());
		}
		else if(report.channel.name == "a-rank-phoenix")
		{
			role = report.guild.roles.find(report => report.name === "Phoenix");
			report.channel.send(role.toString());
		}
		else if(report.channel.name == "a-rank-shiva")
		{
			role = report.guild.roles.find(report => report.name === "Shiva");
			report.channel.send(role.toString());
		}
		else if(report.channel.name == "a-rank-zodiark")
		{
			role = report.guild.roles.find(report => report.name === "Zodiark");
			report.channel.send(role.toString());
		}
		
		report.channel.send({embed});
		return;
	}
	
	else if (report.content.includes("Central Thanalan") || report.content.includes("Zentrales Thanalan") || report.content.includes("Thanalan central"))
	{	
		validation = 1;
		
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
	}
	
	else if (report.content.includes("Eastern Thanalan") || report.content.includes("Östliches Thanalan") || report.content.includes("Thanalan oriental"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("Northern Thanalan") || report.content.includes("Nördliches Thanalan") || report.content.includes("Thanalan septentrional"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("Southern Thanalan") || report.content.includes("Südliches Thanalan") || report.content.includes("Thanalan méridional"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("Western Thanalan") || report.content.includes("Westliches Thanalan") || report.content.includes("Thanalan occidental"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("South Shroud") || report.content.includes("Südwald") || report.content.includes("Forêt du sud"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("North Shroud") || report.content.includes("Nordwald") || report.content.includes("Forêt du nord"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("East Shroud") || report.content.includes("Ostwald") || report.content.includes("Forêt de l'est"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("Central Shroud") || report.content.includes("Tiefer Wald") || report.content.includes("Forêt centrale"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("Western La Noscea") || report.content.includes("Westliches La Noscea") || report.content.includes("Noscea occidentale"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("Upper La Noscea") || report.content.includes("Oberes La Noscea") || report.content.includes("Haute-Noscea"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("Outer La Noscea") || report.content.includes("Äußeres La Noscea") || report.content.includes("Noscea extérieure"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("Middle La Noscea") || report.content.includes("Zentrales La Noscea") || report.content.includes("Noscea centrale"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("Lower La Noscea") || report.content.includes("Unteres La Noscea") || report.content.includes("Basse-Noscea"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("Eastern La Noscea") || report.content.includes("Östliches La Noscea") || report.content.includes("Noscea orientale"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("Coerthas Central Highlands") || report.content.includes("Zentrales Hochland von Coerthas") || report.content.includes("Hautes terres du Coerthas central"))
	{	
		validation = 1;
		
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
	}

	else if (report.content.includes("Coerthas Western Highlands") || report.content.includes("Westliches Hochland von Coerthas") || report.content.includes("Hautes terres du Coerthas occidental"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("The Churning Mists") || report.content.includes("Wallende Nebel") || report.content.includes("L'Écume des cieux de Dravania"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("The Dravanian Hinterlands") || report.content.includes("Dravanisches Hinterland") || report.content.includes("Arrière-pays dravanien"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("The Dravanian Forelands") || report.content.includes("Dravanisches Vorland") || report.content.includes("Avant-pays dravanien"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("The Sea of Clouds") || report.content.includes("Abalathisches Wolkenmeer") || report.content.includes("L'Écume des cieux d'Abalathia"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("The Ruby Sea") || report.content.includes("Rubinsee") || report.content.includes("Mer de Rubis"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("The Azim Steppe") || report.content.includes("Azim-Steppe") || report.content.includes("Steppe d'Azim"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("The Peaks") || report.content.includes("Die Zinnen") || report.content.includes("Les Pics"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("The Lochs") || report.content.includes("Das Fenn") || report.content.includes("Les Lacs"))
	{
		validation = 1;
		
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
	}

	else if (report.content.includes("The Fringes") || report.content.includes("Abanisches Grenzland") || report.content.includes("Les Marges"))
	{
		validation = 1;
		
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
	}

	if (validation == 1)
	{
		validation = 0;
		
		embed = new Discord.RichEmbed()
			.setTitle("Hunt found!")
			.addField("Reported by >>> " + user , ":flag_gb: " + edit_en + "\n:flag_de: " + edit_de + "\n:flag_fr: " + edit_fr)
			.setColor(0xFF0000)
			
		report.delete();
		
		if(report.channel.name == "s-rank" || report.channel.name == "boss-fate")
			report.channel.send("@here");
		else if(report.channel.name == "a-rank-lich")
		{
			role = report.guild.roles.find(report => report.name === "Lich");
			report.channel.send(role.toString());
		}
		else if(report.channel.name == "a-rank-odin")
		{
			role = report.guild.roles.find(report => report.name === "Odin");
			report.channel.send(role.toString());
		}
		else if(report.channel.name == "a-rank-phoenix")
		{
			role = report.guild.roles.find(report => report.name === "Phoenix");
			report.channel.send(role.toString());
		}
		else if(report.channel.name == "a-rank-shiva")
		{
			role = report.guild.roles.find(report => report.name === "Shiva");
			report.channel.send(role.toString());
		}
		else if(report.channel.name == "a-rank-zodiark")
		{
			role = report.guild.roles.find(report => report.name === "Zodiark");
			report.channel.send(role.toString());
		}
		
		report.channel.send({embed});
		return;
	}
});


var prefix = ">";
var hunt = false;
// Region-Maps with Hunt-Spawnpoints
bot.on("message", map =>
{
	if(map.channel.name == "hunting_assistant" && prefix == map.content.charAt(0) && map.content.length > 1)
	{
		if(map.author.bot) return;

		
		let mapOutput = map.content.slice(1)
		mapOutput = mapOutput.toLowerCase().split(' ');
		for (var i = 0; i < mapOutput.length; i++)
			mapOutput[i] = mapOutput[i].charAt(0).toUpperCase() + mapOutput[i].slice(1); 
		mapOutput = mapOutput.join(' ');
		
		let embed;
		
		
		if (mapOutput.toLowerCase() == "mor dhona")
		{
			hunt = true;

			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/3m2Vhvo.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "central thanalan" || mapOutput.toLowerCase() == "zentrales thanalan" || mapOutput.toLowerCase() == "thanalan central")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/mpeyqjk.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "eastern thanalan" || mapOutput.toLowerCase() == "östliches thanalan" || mapOutput.toLowerCase() == "thanalan oriental")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/PiSleYN.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "northern thanalan" || mapOutput.toLowerCase() == "nördliches thanalan" || mapOutput.toLowerCase() == "thanalan septentrional")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/gpSqTrv.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "southern thanalan" || mapOutput.toLowerCase() == "südliches thanalan" || mapOutput.toLowerCase() == "thanalan méridional")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/9GC5edr.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "western thanalan" || mapOutput.toLowerCase() == "westliches thanalan" || mapOutput.toLowerCase() == "thanalan occidental")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/KFMRkQX.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "south shroud" || mapOutput.toLowerCase() == "südwald" || mapOutput.toLowerCase() == "forêt du sud")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/35n6lPQ.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "north shroud" || mapOutput.toLowerCase() == "nordwald" || mapOutput.toLowerCase() == "forêt du nord")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/7SL0gym.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "east shroud" || mapOutput.toLowerCase() == "ostwald" || mapOutput.toLowerCase() == "forêt de l'est")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/inMDorM.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "central shroud" || mapOutput.toLowerCase() == "tiefer wald" || mapOutput.toLowerCase() == "forêt centrale")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/UnXxMS1.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "eastern la noscea" || mapOutput.toLowerCase() == "westliches la noscea" || map.content == "noscea occidentale")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/RdWeObN.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "upper la noscea" || mapOutput.toLowerCase() == "oberes la noscea" || mapOutput.toLowerCase() == "haute-noscea")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/y0brsLf.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "outer la noscea" || mapOutput.toLowerCase() == "äußeres la noscea" || mapOutput.toLowerCase() == "noscea extérieure")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/PSOTCrs.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "middle la noscea" || mapOutput.toLowerCase() == "zentrales la noscea" || mapOutput.toLowerCase() == "noscea centrale")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/Pl3Lc2f.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "lower la noscea" || mapOutput.toLowerCase() == "unteres la noscea" || mapOutput.toLowerCase() == "basse-noscea")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/jPdsXE2.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "eastern la noscea" || mapOutput.toLowerCase() == "östliches la noscea" || mapOutput.toLowerCase() == "noscea orientale")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/zDoE5IR.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "coerthas central highlands" || mapOutput.toLowerCase() == "zentrales hochland von coerthas" || mapOutput.toLowerCase() == "hautes terres du coerthas central")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/QSHKW98.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "coerthas western highlands" || mapOutput.toLowerCase() == "westliches hochland von coerthas" || mapOutput.toLowerCase() == "hautes terres du coerthas occidental")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/C3lvS45.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "the churning mists" || mapOutput.toLowerCase() == "wallende nebel" || mapOutput.toLowerCase() == "l'écume des cieux de dravania")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/mxI5aeI.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "the dravanian hinterlands" || mapOutput.toLowerCase() == "dravanisches hinterland" || mapOutput.toLowerCase() == "arrière-pays dravanien")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/LPGK9Lc.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "the dravanian forelands" || mapOutput.toLowerCase() == "dravanisches vorland" || mapOutput.toLowerCase() == "avant-pays dravanien")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/tTq1EeA.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "the sea of clouds" || mapOutput.toLowerCase() == "abalathisches wolkenmeer" || mapOutput.toLowerCase() == "l'écume des cieux d'abalathia")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/ZUZiEsa.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "azys lla")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/Uk4E0Mk.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "the ruby sea" || mapOutput.toLowerCase() == "rubinsee" || mapOutput.toLowerCase() == "mer de rubis")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/HK2m66j.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "the azim steppe" || mapOutput.toLowerCase() == "azim-steppe" || mapOutput.toLowerCase() == "steppe d'azim")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/vR1xvEX.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "yanxia")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/iiQhkHE.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "the peaks" || mapOutput.toLowerCase() == "die zinnen" || mapOutput.toLowerCase() == "les pics")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/9VHVpkR.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "the lochs" || mapOutput.toLowerCase() == "das fenn" || mapOutput.toLowerCase() == "les lacs")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/xAYa0xf.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else if (mapOutput.toLowerCase() == "the fringes" || mapOutput.toLowerCase() == "abanisches grenzland" || mapOutput.toLowerCase() == "les marges")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + mapOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/6mn0Q0Q.png")
			
			map.delete();
			map.author.send({embed});
			return;
		}
		
		else hunt = true;
	}
	
	else
	{
		if(map.author.bot) return;
		
		map.delete();
		map.author.send("You have sent an invalid command!");
		return;
	}
});


// Hunt-Spawnpoints
bot.on("message", hunt =>
{
	if(hunt == true)
	{
		if(hunt.author.bot) return;
			

		let huntOutput = hunt.content.slice(1)
		huntOutput = huntOutput.toLowerCase().split(' ');
		for (var i = 0; i < huntOutput.length; i++)
			huntOutput[i] = huntOutput[i].charAt(0).toUpperCase() + huntOutput[i].slice(1); 
		huntOutput = huntOutput.join(' ');
		
		let embed;
		
		
		if (huntOutput.toLowerCase() == "croque-mitaine" || huntOutput.toLowerCase() == "croque mitaine" || huntOutput.toLowerCase() == "croque")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/0oN74EN.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "vogaal ja" || huntOutput.toLowerCase() == "vogaal")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/0udtZ1G.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "croakadile" || huntOutput.toLowerCase() == "quakquak" || huntOutput.toLowerCase() == "croabéros")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/n13uVZY.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "unktehi")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/MPx1nTN.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "the garlok" || huntOutput.toLowerCase() == "garlok")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/iL7LloL.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "hellsclaw" || huntOutput.toLowerCase() == "höllenklaue" || huntOutput.toLowerCase() == "griffe des enfers magitek" || huntOutput.toLowerCase() == "griffe")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/xXaAoPe.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "bonnacon")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/HjFfqP3.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "nahn")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/aDNjIkZ.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "nandi")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/nfVNEUB.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "marberry")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/GxBeAEd.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "chernobog" || huntOutput.toLowerCase() == "czernobog")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/MONOz2f.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "cornu")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/y0s1HzZ.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "laideronnette" || huntOutput.toLowerCase() == "laideronette")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/Xk1zx9l.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "forneus")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/fwF8ERR.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "wulgaru")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/jnyrFgT.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "melt" || huntOutput.toLowerCase() == "schmelze" || huntOutput.toLowerCase() == "fondu")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/39x7nBl.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "mindflayer" || huntOutput.toLowerCase() == "seelenbrenner" || huntOutput.toLowerCase() == "flagelleur mental" || huntOutput.toLowerCase() == "flagelleur")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/TahxKS1.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "ghede ti malice" || huntOutput.toLowerCase() == "ghede titus häme"  || huntOutput.toLowerCase() == "guédé ti-malice" || huntOutput.toLowerCase() == "ghede" || huntOutput.toLowerCase() == "guédé")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/lCVmHfi.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "thousand-cast theda" || huntOutput.toLowerCase() == "tausendzahn theda" || huntOutput.toLowerCase() == "theda la tripoteuse" || huntOutput.toLowerCase() == "theda")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/C43tX6R.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "girtab")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/dCFeOdU.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "zona seeker" || huntOutput.toLowerCase() == "zona sucher" || huntOutput.toLowerCase() == "zona")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/mQyK2yf.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "alectryon")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/z7sXJ8F.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "brontes")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/UnXl3tH.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "sabotender bailarina" || huntOutput.toLowerCase() == "pampa ballerine" || huntOutput.toLowerCase() == "sabotender" || huntOutput.toLowerCase() == "pampa")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/sXdlAlt.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "lampalagua" || huntOutput.toLowerCase() == "balaur")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/VqhUD6r.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "maahes")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/ccgbN4c.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "nunyunuwi")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/nX90vyL.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "zanig'oh" || huntOutput.toLowerCase() == "zanig")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/CsWwku3.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "minhocao")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/CDCGu6U.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "dalvag's final flame" || huntOutput.toLowerCase() == "letzte flamme dalvags" || huntOutput.toLowerCase() == "dernière flamme de dalvag" || huntOutput.toLowerCase() == "dalvag")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/yZbue5K.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "agrippa the mighty" || huntOutput.toLowerCase() == "agrippa")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/UUk87Dn.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "kurrea")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/8qUFCS3.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "safat")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/jMTdMKx.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "marraco")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/5XPWlH6.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "kaiser behemoth" || huntOutput.toLowerCase() == "kaiser-behemoth" || huntOutput.toLowerCase() == "béhémoth empereur" || huntOutput.toLowerCase() == "behemoth" || huntOutput.toLowerCase() == "béhémoth")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/1vKO0JE.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "mirka" || huntOutput.toLowerCase() == "lyuba")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/lqwPl59.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "gandarewa" || huntOutput.toLowerCase() == "gandalva" || huntOutput.toLowerCase() == "gandharva")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/p0KWnBT.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "bune" || huntOutput.toLowerCase() == "agathos")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/YEmpSXA.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "senmurv" || huntOutput.toLowerCase() == "simurgh" || huntOutput.toLowerCase() == "sênmurw")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/tQVlu2D.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "pylraster" || huntOutput.toLowerCase() == "xhauron" || huntOutput.toLowerCase() == "pirlasta" || huntOutput.toLowerCase() == "lord of the wyverns" || huntOutput.toLowerCase() == "wyvern-lord" || huntOutput.toLowerCase() == "seigneur des wyvernes" || huntOutput.toLowerCase() == "wyvern")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/cuLErNi.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "the pale rider" || huntOutput.toLowerCase() == "bleicher reiter" || huntOutput.toLowerCase() == "cavalier pâle" || huntOutput.toLowerCase() == "rider" || huntOutput.toLowerCase() == "reiter" || huntOutput.toLowerCase() == "cavalier")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/Y69m17H.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "stolas" || huntOutput.toLowerCase() == "slipkinx steeljoints" || huntOutput.toLowerCase() == "rutschfix stahlscharnier" || huntOutput.toLowerCase() == "slipkinx joints-d'acier" || huntOutput.toLowerCase() == "slipkinx" || huntOutput.toLowerCase() == "rutschfix")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/9ThXLRx.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "leucrotta")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/FKTnlcp.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "campacti" || huntOutput.toLowerCase() == "stench blossom" || huntOutput.toLowerCase() == "pestwurz" || huntOutput.toLowerCase() == "fleur nauséabonde" || huntOutput.toLowerCase() == "stench" || huntOutput.toLowerCase() == "fleur")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/EdaIftz.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "bird of paradise" || huntOutput.toLowerCase() == "paradiesvogel" || huntOutput.toLowerCase() == "oiseau de paradis" || huntOutput.toLowerCase() == "paradise" || huntOutput.toLowerCase() == "paradis")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/fqFMJZq.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "sisiutl" || huntOutput.toLowerCase() == "enkelados" || huntOutput.toLowerCase() == "engedoras" || huntOutput.toLowerCase() == "enkélados")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/lFlWOrA.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "salt and light" || huntOutput.toLowerCase() == "salzlicht" || huntOutput.toLowerCase() == "salaclux" || huntOutput.toLowerCase() == "salt")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/1Zee4RA.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "mahisha" || huntOutput.toLowerCase() == "luminare")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/BCwWHco.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "udumbara")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/hfm1lEx.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "orcus" || huntOutput.toLowerCase() == "erle")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/1LrMJ9l.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "bone crawler" || huntOutput.toLowerCase() == "knochenkriecher" || huntOutput.toLowerCase() == "mangeur d'os" || huntOutput.toLowerCase() == "bone" || huntOutput.toLowerCase() == "mangeur")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/qIYyQpr.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "vochstein" || huntOutput.toLowerCase() == "aqrabuamelu")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/x3CqhLq.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "orghana")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/tzrfRth.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "girimekhala" || huntOutput.toLowerCase() == "sum")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/XYlb96U.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "okina")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/8oGlsHb.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "oni yumemi" || huntOutput.toLowerCase() == "funa yurei" || huntOutput.toLowerCase() == "yumemi" || huntOutput.toLowerCase() == "yurei")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/VhK65N5.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "gamma")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/QRyiPbp.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		else if (huntOutput.toLowerCase() == "gajasura" || huntOutput.toLowerCase() == "angada")
		{
			embed = new Discord.RichEmbed()
				.setTitle("Hunt Map: " + huntOutput)
				.setColor(0x008000)
				.setImage("https://i.imgtc.com/nMFy37e.png")
			
			hunt.delete();
			hunt.author.send({embed})
			return;
		}
		
		/*else if (hunt.content === ">help")
		{
			hunt.author.send("HELP");
			hunt.delete();
			return;
		}*/
		
		else
		{
			//hunt.author.send("No valid input!\nIf you need a list with all commands, type: >help");
			hunt.delete();
			hunt.author.send("You have sent an invalid command!");
			return;
		}
	}
});


// Role-Assignment
bot.on("message", role =>
{
	if(role.channel.name == "role-assignment")
	{
		if(role.author.bot) return;
		
		
		let userRole = "";
		
		if (role.content == "+deutsch")
		{	
			// \@ROLE to get the id & "mention" has to be allowed
			//role.member.addRole("575512648117125143");
			userRole = role.guild.roles.find("name", "-deutsch-");
			role.member.addRole(userRole);
			
			role.delete();
			role.author.send("Du hast nun Zugriff auf den deutschen Text-Channel und die deutschen Sprach-Channel.");
		}
	
		else if (role.content == "+english")
		{
			//role.member.addRole("575512651879153685");
			userRole = role.guild.roles.find("name", "-english-");
			role.member.addRole(userRole);
			
			role.delete();
			role.author.send("You now have access to the enlgish text-channel and the english voice-channels.");
		}
	
		else if (role.content == "+français" || role.content == "+francais")
		{
			//role.member.addRole("575512655201042442");
			userRole = role.guild.roles.find("name", "-français-");
			role.member.addRole(userRole);
			
			role.delete();
			role.author.send("Vous avez maintenant accès au canal de texte français et aux canaux de langue française.");
		}
	
		else if (role.content == "-deutsch")
		{
			userRole = role.guild.roles.find("name", "-deutsch-");
			role.member.removeRole(userRole);
			
			role.delete();
			role.author.send("You have revoked the language setting.");
		}
		
		else if (role.content == "-english")
		{
			userRole = role.guild.roles.find("name", "-english-");
			role.member.removeRole(userRole);
			
			role.delete();
			role.author.send("You have revoked the language setting.");
		}
		
		else if (role.content == "-français" || role.content == "-francais")
		{
			userRole = role.guild.roles.find("name", "-français-");
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
