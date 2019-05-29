const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
    console.log(`~~~~~~~~~~~~~~~~~`);
    console.log(`Logging into Discord`);
    console.log(`~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`on  ${client.guilds.size} Servers `);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame(`#TheH1ts clan|$Help`,"http://twitch.tv/y04zgamer")
    client.user.setStatus("dnd")
 });
 





client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "$unmute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
  
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  });
    }
  
  };
  
  });










client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

var args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد طردة**");


  message.guild.member(user).kick(7, user);

message.channel.send(`**✅ ${user.tag} kicked from the server ! ✈ **  `)

}
});







client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

var args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**✅ ${user.tag} banned from the server ! ✈ **  `)

}
});




client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
    if (command === "bans") {
        message.delete(5000)
         if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("Error : \` I Dont Have ADMINISTRATOR Permission\`").then(message => message.delete(5000));
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        if(!message.channel.guild) return;
        message.guild.fetchBans()
        .then(bans => message.channel.send(`\`${bans.size}\` : عدد الاشخاص المحظورين من السيرفر `)).then(message => message.delete(5000))

  .catch(console.error);
}
});









client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith('$bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Cozmo bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
	      let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });
    












 client.on("message", (message) => {
    
                        if (message.content.startsWith(prefix + "new")) {
        const reason = message.content.split(" ").slice(1).join(" ");
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
        message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`تم أنشاء التذكره , #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(` ${message.author.username}!`, ` *** شكرًا لك على التواصل مع فريق الدعم! سنرد عليك في أقرب وقت ممكن.. *** `)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error); 
    }

                        if (message.content.startsWith(prefix + "close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`لا يمكنك استخدام أمر الإغلاق خارج روم التذكره.`);

        message.channel.send(` ***هل أنت متأكد من إغلآق التذكرة ؟, Type -confirm to close the ticket., لديك 10 ثوآني للتأكيد .***`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '-confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })
                    .then((collected) => {
                        message.channel.delete();
                    })
                    .catch(() => {
                        m.edit('أنتهى الوقت لن يتم أغلاق لتذكره').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }

});







client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
 
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setTitle('Message Edited')
       .addField('Before Edit',`${message.cleanContent}`)
       .addField('After Edit',`${newMessage.cleanContent}`)
       .addField('Edit In',`<#${message.channel.id}>`)
       .addField('By', `<@${message.author.id}> `)
       .setColor('#36393e')
       .setTimestamp();
     channel.send({embed:embed});
 
 
});








client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('$ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms :signal_strength: ")
.addField('**WebSocket:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
}
});





client.on("message", message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "clear")) {
        if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {
  
}
}}).then(msg => {msg.delete(3000)});
                  }

  

});









client.on("message", msg => {
    var prefix = "$";
if(msg.content.startsWith (prefix + "id")) {
if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
const embed = new Discord.RichEmbed();
embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
   .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
msg.channel.send({embed: embed})
}
});







client.on('message', message => {
    if (message.content.startsWith("$av")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});






client.on('message', message => {
    if(message.content == '$member') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });






client.on('message', message => {
 if (message.content.toLowerCase() === prefix + "move all") {
     message.delete(4000)
 if(!message.channel.guild) return;
 if (!message.member.hasPermission("MOVE_MEMBERS")) return;
 if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return;
if (message.member.voiceChannel == null) return;
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send('\`Moved All Voice Members To Your Channel\`').then(m => m.delete(4000))
 }
   });










client.on("message", message => {
  var prefix = "$";
  if(message.content.startsWith(prefix + "embed")) {
    

var color = message.content.split(" ")[1];
  var text = message.content.split(" ").slice(2);
    var tt = text.join(" ")
  if(!color) return message.reply("يجب كتابة لون الامبد الذي تريده");
    if(!tt) return message.reply("يجب كتابة كلام لتكراره");
  let embed = new Discord.RichEmbed()
  .setColor(color)
  .setDescription(tt)
  message.channel.send(embed).catch(Julian =>{console.log('`Error`: ' + Julian);
message.channel.send("`Error`:" + Julian)
    })
  }
  });












client.on('message', message => {
  const aa = message.content.split(" ").slice(1).join(" ");
  if(message.content.startsWith(prefix + "skin")){
    if(!aa) return message.reply(`:x:  -  **${prefix}skin <name>**`);
    var ss = new Discord.RichEmbed()
    .setTitle(`${aa}'s Skin!`)
    .setURL(`https://minotar.net/armor/body/${aa}/100.png`)
    .setThumbnail(`https://minotar.net/avatar/${aa}`)
    .setImage(`https://minotar.net/armor/body/${aa}/100.png`)
    .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(ss);
  }
});













client.on("message", message => {
if(message.content.startsWith(prefix + "vmute")) {
var mnt = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mnt) return message.channel.send(`**• | Usage:** ${prefix}vmute \`\`@Name\`\``);
if(!mnt.voiceChannel) return message.channel.send(`⛔ | *${mnt.user.tag}* is not in a voice channel!`);
mnt.setMute(true).then(() => {
message.channel.send(`Successfully Muted ${mnt} :+1:`)
}).catch(console.error);
}
if(message.content.startsWith(prefix + "unvmute")) {
var mnt = message.mentions.members.first();
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MUTE_MEMBERS") || !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
if(!mnt) return message.channel.send(`**• | Usage:** ${prefix}unvmute \`\`@Name\`\``);
if(!mnt.voiceChannel) return message.channel.send(`⛔ | *${mnt.user.tag}* is not in a voice channel!`);
mnt.setMute(false).then(() => {
message.channel.send(`Successfully Unmuted ${mnt} :+1:`)
}).catch(console.error);
}
});









client.on('message', message => {
     if (message.content === "-support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/bvrNWbY**")
     
     
  message.channel.sendEmbed(embed);
    }
});













client.on('message',message =>{
		var command = message.content.toLowerCase().split(" ")[0];
		  var args = message.content.toLowerCase().split(" ");
		  var userM = message.mentions.users.first()
		  if(command == prefix + 'unban') {
			  if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(':no_entry: | You dont have **BAN_MEMBERS** Permission!');
			  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(':no_entry: | I dont have **BAN_MEMBERS** Permission!');
			  if(!args[1]) return  message.channel.send(':no_entry: | Please type the ID of user');
			  if(args[1].length < 16) return message.reply(':no_entry: | This ID is not id user!');
			  message.guild.fetchBans().then(bans => {
				  var Found = bans.find(m => m.id === args[1]);
				  if(!Found) return message.channel.send(`:no_entry: | <@${message.author.id}> This preson not have any ban from this server! :unlock:`);
				  message.guild.unban(args[1]);
				  message.channel.send(`:white_check_mark: Successfully \`\`UNBANNED\`\` <@${args[1]}> From the server!`);
				 
				  let banInfo = new Discord.RichEmbed()
				  .setTitle('**New Unbanned User !**')
				  .setThumbnail(message.author.avatarURL)
				  .setColor('GREEN')
				  .setDescription(`**\n:airplane: Successfully \`\`UNBANNED\`\` <@${args[1]}> From the server!\n\n**User:** <@${args[1]}> (ID: ${args[1]})\n**By:** <@${message.author.id}> (ID: ${message.author.id})`)
				  .setTimestamp()
				  .setFooter(userM.user.tag, userM.user.avatarURL)
				 
				  let incidentchannel = message.guild.channels.find(`name`, "incidents");
				  if(!incidentchannel) return message.channel.send("Can't find incidents channel.");
				  incidentchannel.send(banEmbed);
				  }
	   
			  )}
			})









client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","TheH1ts Members"));
    });













client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '232564113459511306') return;

if (message.content.startsWith(prefix + 'g')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + 'w')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'l')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + 's')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Justin-Ly0001");
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
}

});












client.on('message', message => {
	var prefix = "-";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``Use : " +prefix+ "move @User``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`✅ You Have Moved <@${usermentioned}> To Your Channel`)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("`You Cant Move"+ message.mentions.members.first() +" `The User Should Be In channel To Move It`")
}
} else {
 message.channel.send("**``You Should Be In Room Voice To Move SomeOne``**")
}
} else {
message.react("❌")
 }}});







client.on('message', message => { 
let prefix = '$'
    if (message.content.startsWith(prefix + 'emojis')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➡ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});









client.on('message', eyad => {
  if (eyad.content.startsWith('$vban')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("❎ | **انت لا تمتلك الخاصيه المطلوبه**");
let men = eyad.mentions.users.first()
let mas = eyad.author
if(!men) return eyad.channel.send('`⛔| ** يجب عليك المنشن اولاً **`');
eyad.guild.channels.forEach(c => {
c.overwritePermissions(men.id, {
          CONNECT: false
})
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
لقد تم منع من دخول الرومات الصوتيه 
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("http://www.clker.com/cliparts/o/Y/d/G/j/1/close-hi.png")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
لقد تم منع من دخول الرومات الصوتيه
بواسطة : <@${eyad.author.id}> `)
.setThumbnail("http://www.clker.com/cliparts/o/Y/d/G/j/1/close-hi.png")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(10000)})
    }
})











client.on("message", message => {    
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "$savatar"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`صورة ** ${message.guild.name} **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)

   message.channel.send({embed});
      }
  });







client.on('message', eyad => {
  if (eyad.content.startsWith('$uvban')) {
if (!eyad.member.hasPermission("MOVE_MEMBERS")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
 let men = eyad.mentions.users.first()
 let mas = eyad.author
 if(!men) return eyad.channel.send('`⛔| ** يجب عليك المنشن اولاً **`');
 eyad.guild.channels.forEach(c => {
 c.overwritePermissions(men.id, {
         CONNECT: true
 })
    })
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**
 <@${men.id}>
 الان يمكنك الدخول الي الرومات الصوتيه:)
بواسطة : <@${eyad.author.id}> **`)
.setThumbnail("http://shopforclipart.com/images/green-tick/22.jpg")
          
client.users.get(men.id).sendEmbed(embed)
const Embed11 = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(eyad.guild.name, eyad.guild.iconURL)
.setDescription(`          <@${men.id}>
الان يمكنك الدخول الي الرومات الصوتيه
بواسطة : <@${eyad.author.id}>
`)
.setThumbnail("http://shopforclipart.com/images/green-tick/22.jpg")
eyad.channel.sendEmbed(Embed11).then(eyad => {eyad.delete(15000)})
    }
})












client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '💎-║chat');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر ي قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("#TheH1TS CLAN ")
        .setTimestamp()
    
      channel.sendEmbed(embed);
    });
    











client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "$mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
  });
    }
  
  };
  
  });










client.on('message', msg => {
    if (msg.content === 'السلام عليكم') {
      msg.reply('**وعليكم السلام**');
    }
  });






client.on('message', msg => {
    if (msg.content === 'كيف الحال') {
      msg.reply('**الحمد الله**');
    }
  });




client.on('message', msg => {
    if (msg.content === 'مبروك') {
      msg.reply('**الله يبارك فيك**');
    }
  });


client.on('message', msg => {
    if (msg.content === 'مرحبا') {
      msg.reply('**هلا**');
    }
  });



client.on('message', msg => {
    if (msg.content === 'هلا') {
      msg.reply('**اهلين**');
    }
  });





client.on('message', msg => {
    if (msg.content === 'ip1') {
      msg.reply('**play.timolia.de**');
    }
  });





client.on('message', msg => {
    if (msg.content === 'ip2') {
      msg.reply('**eu.hypixel.net**');
    }
  });



client.on('message', msg => {
    if (msg.content === 'ip3') {
      msg.reply('**premium.blocksmc.com**');
    }
  });



client.on('message', msg => {
    if (msg.content === 'ip4') {
      msg.reply('**eu.hivemc.com **');
    }
  });





client.on('message', msg => {
    if (msg.content === 'ip5') {
      msg.reply('**pvptemple.eu**');
    }
  });




client.on('message', msg => {
    if (msg.content === 'ip6') {
      msg.reply('**Revils.eu**');
    }
  });






client.on('message', msg => {
    if (msg.content === 'ip7') {
      msg.reply('**giantcraft.net**');
    }
  });




client.on('message', msg => {
    if (msg.content === 'ip8') {
      msg.reply('**play.Requezmc.net**');
    }
  });




client.on('message', msg => {
    if (msg.content === 'ip9') {
      msg.reply('**fynnland.net**');
    }
  });




client.on('message', msg => {
    if (msg.content === 'ip10') {
      msg.reply('**eu.minemen.club**');
    }
  });









client.on("message", message => {
	var prefix = "$";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});






















client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
  :crown:اسم العضو  ${member}:crown:  
  انت العضو رقم ${member.guild.memberCount} `) 
  }).catch(console.error)
  })








client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "$mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
  });
    }
  
  };
  
  });










client.on('message', function(msg) {
    var prefix = "$"
if(msg.content.startsWith (prefix  + 'server')) {
 let embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setThumbnail(msg.guild.iconURL)
 .setTitle(`Showing Details Of  **${msg.guild.name}*`)
 .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
 .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
 .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
 .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
 .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
 .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
 .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
 .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
 .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
 msg.channel.send({embed:embed});
}
});



client.on('message', message => {
    if (message.content === "$bot") {
           if(!message.channel.guild) return message.reply('** This command only for servers **');
    let embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .addField("**اسم السيرفر**", message.guild.name)
 .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
 .addField("**المستخدمين:**", client.users.size)
 .addField("**قنوات:**", client.channels.size)
message.channel.sendEmbed(embed);
   }
});







client.on('message', message => {
    if (message.content.startsWith("$رابط")) {
        
  message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
        .setFooter("Spring-Team")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription(`
**-------------------
-هذا هو الرابط :
-ارسله للي تحب وحيآك انت وياه
-ونورنا ياجميل :heart: 
------------------- **`)
        .setFooter("By:#TheH1ts")
      message.author.sendEmbed(Embed11)
    }
});











client.on('message', message => { 
    var prefix = "$";
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "Roleadd") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('*** Done :white_check_mark:  ***').then(msg => {msg.delete(10000)});
    }
    });
    








client.on('message', message => {

    if(message.content === prefix + "$mutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
           });
             }
//FIRE BOT
 if(message.content === prefix + "$unmutechannel") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**__تم فتح الشات__:white_check_mark:**")
           });
             }
             
      
    
});












client.login(process.env.BOT_TOKEN);
