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
    client.user.setGame(`#Riyderz Games|$Help`,"http://twitch.tv/y04zgamer")
    client.user.setStatus("dnd")
 });
 
 
 
 
 client.on('message', message => {
if(message.content.startsWith("$slots")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});











client.on('message', message => {
      if(message.content.startsWith ("$marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' 😏 **لازم تطلب ايد وحدة**').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' 😳 **ولد ما يصحلك الا حرمة وحدة كل مرة**').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author} 
 العرض لمدة 15 ثانية  
 اكتبي موافقة او لا**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` **${message.author} و ${proposed} الف الف مبروك الله , يرزقكم الذرية الصالحة** `);
})

   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  **${message.author} تم رفض عرضك** `);
})
        
  }
});




const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]
 
 client.on('message', message => {
   if (message.content.startsWith("$kt")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});






client.on('message',async Epic => {
  var prefix = "$" ;
  if(Epic.content.startsWith(prefix + "vonline")) {
  if(!Epic.guild.member(Epic.author).hasPermissions('MANAGE_CHANNELS')) return Epic.reply(':x: **I Dont Have Permissions**');
  if(!Epic.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return Epic.reply(':x: **You Dont Have Permissions**');
  Epic.guild.createChannel(`⇅Riyderz  : [ ${Epic.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice Online Is Activation In ${Epic.guild.name}`);
    c.overwritePermissions(Epic.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`⇅Riyderz  :  ${Epic.guild.members.filter(m => m.voiceChannel).size} .`)
    },1000);
  });
  }
});






client.on('message', message => {
    if (message.content.startsWith("$hack")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
 
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("```اكتب اسم الشخص الي تبي يتهكر```");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓ ] 2%').setColor(0xFF0000)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓ ] 3%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓ ] 4%').setColor(0xFF0000)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 28%').setColor(0xFF0000)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 35%').setColor(0xFF0000)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 78%').setColor(0xFF0000)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 80%').setColor(0xFF0000)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 86%').setColor(0xFF0000)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 89%').setColor(0xFF0000)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%').setColor(0xFF0000)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%').setColor(0xFF0000)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%').setColor(0xFF0000)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%').setColor(0xFF0000)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓���▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%').setColor(0xFF0000)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%').setColor(0xFF0000)})
             }, 17000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:' + virusname + 'done it\'s going good 100.9%').setColor(0xFF0000)})
             }, 18000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: hacking yeah i love it').setColor(0xFF0000)})
             }, 19000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: uploading data' + virusname + ".key").setColor(0xFF0000)})
             }, 22000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 5...').setColor(0xFF0000)})
             }, 25000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 4...').setColor(0xFF0000)})
             }, 26000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 3...').setColor(0xFF0000)})
             }, 27000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 2...').setColor(0xFF0000)})
             }, 28000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 29000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%').setColor(0xFF0000)})
           }, 30000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100% virus added').setColor(0xFF0000)})
           }, 31000)
              setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
               message.channel.send('تم تهكيرك')
           }, 33000)
           });
         }
 })





 client.on('message', message => {
   var prefix = "$" ;
if(message.content.split(' ')[0] == '$srh'){  
       if (message.author.bot) return;
     if(!message.channel.guild) return;
                       
let args = message.content.split(' ').slice(1).join(' ');
let arg = message.content.split(' ').slice(2).join(' ');
if(!args) return message.reply ("**Mention A member please** :dove: ");
  if(!arg) return message.reply ("**Write A Message** :dove: ");
 
 
 
 
 var user = message.mentions.users.first();
 
       
        if(user === message.author) return;
          let em  = new Discord.RichEmbed()
.setAuthor("Sarahah", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
.addField("◆ Msg : " , arg)
 
 .setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
                 message.delete()                                    
client.guilds.get(message.guild.id).members.get(user.id).sendEmbed(em)
           
 
 let embed = new Discord.RichEmbed()
 .setAuthor("Sarahah", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
 .setDescription(':dove: شكرا لصراحتك')
 .setColor("10bbb3")
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
  message.channel.sendEmbed(embed);
}
});
 
 
client.on('message', message => {
 
if(message.content.split(' ')[0] == '$srh1'){
       if (message.author.bot) return;
     if(!message.channel.guild) return;
                       
let args = message.content.split(' ').slice(1).join(' ');
let arg = message.content.split(' ').slice(2).join(' ');
if(!args) return message.reply ("**Mention A member please** :dove: ");
  if(!arg) return message.reply ("**Write A Message** :dove: ");
 
 
 
 
 var user = message.mentions.users.first();
 
       
        if(user === message.author) return;
          let e  = new Discord.RichEmbed()
.setAuthor("Sarahah", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
.addField("◆ Sent By :" , message.author.tag)
.addField("◆ Msg : " , arg)
 
 .setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
    message.delete()                                          
client.guilds.get(message.guild.id).members.get(user.id).sendEmbed(e)
                                 
 
 
 
 let embed = new Discord.RichEmbed()
 .setAuthor("Sarahah", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
 .setDescription(':dove: شكرا لصراحتك')
 .setColor("10bbb3")
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
  message.channel.sendEmbed(embed);
}
});
 
 
 
client.on('message', message => {
 
if(message.content.split(' ')[0] == '$sr7'){
       if (message.author.bot) return;
     if(!message.channel.guild) return;
                       if(user === message.author) return;  
let args = message.content.split(' ').slice(1).join(' ');
let arg = message.content.split(' ').slice(2).join(' ');
if(!user) return message.reply ("**Mention A member please** :dove: ");
  if(!arg) return message.reply ("**Write A Message** :dove: ");
 
 
 
 var user = message.mentions.users.first();
 
       
     
 
const w = ['./Toxic™/img/sarahah.png'];
var Canvas = require('canvas')
var jimp = require('jimp')
 
             
        let Image = Canvas.Image,
            canvas = new Canvas(500, 500),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
 
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 500, 500);
 
})
 
 
                let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(20, 20) + ".png" : message.author.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
 
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, -100 , -100, 70, 70);
                                             
   
                       
                 
                     
                        ctx.font = 'Bold 28px Arial ';
                        ctx.fontSize = '28px';
                        ctx.fillStyle = "#000000";
                        ctx.textAlign = "center";
                        ctx.fillText(arg, 242 , 201 );
 
 
 
 
 
            // when someone calls this command, it also adds 1 earlier at the same, but since this is fetching the previous value, we need to add 1 to the answer, even thought it will be updated
            // seconds after this.
   
 
    message.delete()                                          
client.guilds.get(message.guild.id).members.get(user.id).sendFile(canvas.toBuffer())
                                 
     })
    })
 
 
 
 
 let embed = new Discord.RichEmbed()
 .setAuthor("Sarahah", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
 .setDescription(':dove: شكرا لصراحتك')
 .setColor("10bbb3")
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
  message.channel.sendEmbed(embed);
}
});
 
 
 
client.on('message', message => {
     if (message.content === "$sarahah") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
 const embed = new Discord.RichEmbed()
         .setDescription(`** 「:dove: | SARAHAH COMMANDS」**`)
         .addField("`$sr7`",
         "  لارسال صراحة بالصورة")
.addField("`$srh`",
         "لارسال صراحة بدون اسم")
 
.addField("`$srh1`",
         "لارسال صراحة باسم ")
         
         .addField("`مثال`",
         "**$srh @OSmix Single Or Taken ?** ")
 
 
 
.setColor("10bbb3")
.setFooter(`©  Toxic Codes™ `)
message.channel.sendEmbed(embed);
 
    }
});









client.on('message', message => {
     var prefix = "$" ;
            let anime = message.content.split(" ").slice(1).join(" ")
            if(message.content.startsWith(prefix + 'anime')) {
                if(!anime) return message.channel.send('Please Write The Anime Name Example: $anime dragon ball')  
                .then(result => {
                    let embed = new Discord.RichEmbed()
                .setTitle(result.title)
                .addField('Trailer:', `${result.trailer}` || `Unknown`)
                .addField('Episodes:', `${result.episodes}` || `Unknown`)
                .addField('Status:', `${result.status}` || `Unknown`)
                .addField('Studios:', `${result.studios}` || `Unknown`)
                .addField('Genres:', `${result.genres}` || `Unknown`)
                .addField('Ranked:', `${result.ranked}` || `Unknown`)
                .addField('Favorites', `${result.favorites}` || `Unknown`)
                .addField('Rating:', `${result.rating}` || `Unknown`)
                .addField('Premiered:', `${result.premiered}` || `Unknown`)
                .addField('Duration:', `${result.duration}` || `Unknown`)
                .addField('Score:', `${result.score}` || `Unknown`)
                .addField('Scored By:', `${result.scoreStats} ` || `Unknown`)
                .setDescription(`${result.synopsis || 'Unknown'}`)
                .setImage(result.picture)  
                .setColor('#0a0000')
                message.channel.sendEmbed(embed)
                })
                .catch(error => console.log(error));
            }})






client.on('message' , message => {
  var prefix = "$";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);//حقوق دايموند كودز
 })
  }  
 });








client.on('message', function(message) {
 var prefix = "$";
    if(message.content.startsWith(prefix + '8r3h')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});



client.on("message", message => {
    var prefix = "$";
if(message.content.startsWith(prefix + "setnick")){
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;
var user = message.mentions.members.first();
var args = message.content.split(" ").slice(2);
var nick = args.join(" ");
if(!user || !args) return message.channel.send(`**• | Usage:** ${prefix}setnick \`\`@Name\`\` nickname`);
message.guild.member(user.user).setNickname(`${nick}`);
message.channel.send(`Successfully changed **${user}** nickname to **${nick}**`);
}
});


client.on("message", message => {
    if (message.content === "$help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#FFFF00")
         .setDescription(`**:video_game:   الالعاب|Games**
  ** __$hack__->**لعبة هكر مزح
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  ** __$cut__->**لعبة أسئله
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  ** __-$a4kar__->**اذكار
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$5wa6r__->**حكم وخواطر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$7b__->**كلام غزل او بيت شعر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$mrym__->**لعبة مريم المخيفه
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$srh1__->**يسألك سؤال ولازم تجاوب بصراحه
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$wyr__->**لو خيروك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$38ab__->**يطرح لك عقابات مختلفه
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$animal__->**صور حيوانات كيوت ههه
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`)
   message.author.sendEmbed(embed)
   
   }
   });










const adkar = [
  '**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
  '**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
  '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
  '**‏اذكار  |  **أستغفر الله .',     
  '**‏اذكار  | **الْلَّهُ أَكْبَرُ',
  '**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
  '**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
  '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
  '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
  '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
  '**‏اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
  '‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
  '**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
  '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
  'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
  '**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
  '**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
  '**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
  '**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
  '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
  '**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
  '**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
  '**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
  '**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
  '**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
  '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
  '**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
  '**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً',
  '**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
  '**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
  '**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
]
client.on('message', message => {
    var prefix = "$";
if (message.author.bot) return;
if (message.content.startsWith(prefix + "اذكار")) {
  if(!message.channel.guild) return;
var client= new Discord.RichEmbed()
.setTitle("اذكار")
.setThumbnail(message.author.avatarURL)
.setColor('RANDOM')
.setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
               .setTimestamp()
message.channel.sendEmbed(client);
message.react("??")
}
});




const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
   client.on('message', message => {
        var prefix = "$";
 if (message.content.startsWith(prefix + "صراحة")) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});






















const Za7f = [
    "**صورة وجهك او رجلك او خشمك او يدك**.",
    "**اصدر اي صوت يطلبه منك الاعبين**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
    "**قول نكتة اذا و ��ازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**صور اي شيء يطلبه منك الاعبين**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**سو مشهد تمثيلي عن مصرية بتولد**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
    "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
    "**اتصل على امك و قول لها انك تحبها :heart:**.",
    "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
    "**قل لواحد ماتعرفه عطني كف**.",
    "**منشن الجميع وقل انا اكرهكم**.",
    "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
    "**روح المطبخ و اكسر صحن او كوب**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت ا��كف**.",
    "**قول لاي بنت موجود في الروم كلمة حلوه**.",
    "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
    "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
    "**قول قصيدة **.",
    "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**اول واحد تشوفه عطه كف**.",
    "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
    "**تاخذ عقابين**.",
    "**قول اسم امك افتخر بأسم امك**.",
    "**ار��ي اي شيء قدامك على اي احد موجود او على نفسك**.",
    "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
    "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
    "**تتصل على الوالده  و تقول لها خطفت شخص**.",
    "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
    "**����تصل على الوالده  و تقول لها  احب وحده**.",
      "**تتصل على شرطي تقول له عندكم مطافي**.",
      "**خلاص سامحتك**.",
      "** تصيح في الشارع انا  مجنوون**.",
      "** تروح عند شخص تقول له احبك**.",
  
]

 client.on('message', message => {
     var prefix = "$";
   if (message.content.startsWith(prefix + "عقاب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('Riyderz bot' ,
  `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[38ab] Send By: ' + message.author.username)
    }
});













const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
  "**المناقشات العقيمة لا تنجب افكارا**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]


 client.on('message', message => {
       var prefix = "$";
   if (message.content.startsWith(prefix + "خواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه خواطر' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});







const zead = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اي�� تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
]
 client.on('message', message => {
       var prefix = "$";
 if (message.content.startsWith(prefix + "مريم")) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("??")
  }
});









var memes =["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
client.on('message', message => {
      var prefix = "$";
if(message.content.startsWith(prefix + 'هل تعلم')) {
     var embed = new Discord.RichEmbed()
.setImage(memes[Math.floor(Math.random() * memes.length)])
message.channel.sendEmbed(embed);
}
});









var aoasm =[
    {q:"ما عاصمة **افغانستان**",a:"كبل"},
    {q:"ما عاصمة ** البانيا**",a:"تيران"},
    {q:"ما عاصمة **الجزائر **",a:"الجزائر"},
    {q:"ما عاصمة ** **",a:"الجزائر"},
    {q:"ما عاصمة **اندورا لا فيلا **",a:"اندورا"},
    {q:"ما عاصمة **انجولا**",a:"لواندا"},
    {q:"ما عاصمة **انتيجوا وباربودا**",a:"سان جونز"},
    {q:"ما عاصمة **الارجنتين**",a:"بوينس ايرس"},
    {q:"ما عاصمة **ارمينيا**",a:"يريفان"},
    {q:"ما عاصمة ** مصر**",a:"القاهرة"},
    {q:"ما عاصمة ** استراليا**",a:"كانبرا"},
    {q:"ما عاصمة **النمسا**",a:"فيينا"},
    {q:"ما عاصمة ** اذربيجان**",a:"باكو"},
    {q:"ما عاصمة **جزر البهاما**",a:"ناساو"},
    {q:"ما عاصمة **البحرين**",a:"المنامة"},
    {q:"ما عاصمة ** بنجلاديش**",a:"دكـا"},
    {q:"ما عاصمة **باربادوس **",a:"بريدجتاون"},
    {q:"ما عاصمة **بيلا روسيا**",a:"مينسك"},
    {q:"ما عاصمة ** بلجيكا**",a:"بروكسل"},
    {q:"ما عاصمة ** بيليز**",a:"بلوم بان"},
    {q:"ما عاصمة ** بنين**",a:"بورتو نوفو"},
    {q:"ما عاصمة ** بوتان**",a:"ثيمفو"},
    {q:"ما عاصمة **بوليفيا **",a:"لاباز"},
    {q:"ما عاصمة ** البوسنة والهرسك**",a:"سراييفو"},
    {q:"ما عاصمة ** بوتسوانا**",a:"جابورون"},
    {q:"ما عاصمة ** البرازيل**",a:"برازيليا"},
    {q:"ما عاصمة ** بروناى**",a:"بندر سرى بيجاوان"},
    {q:"ما عاصمة ** بلغاريا**",a:"صوفيا"},
    {q:"ما عاصمة ** بوركينا فاسو**",a:"واجادوجو"},
    {q:"ما عاصمة **بوروندى **",a:"بوجومبورا"},
    {q:"ما عاصمة **كمبوديا **",a:"بنوم بنـه"},
    {q:"ما عاصمة ** الكاميرون**",a:"ياوندى"},
    {q:"ما عاصمة ** كندا**",a:"اوتاوا"},
    {q:"ما عاصمة ** الرأس الاخضر**",a:"برايا"},
    {q:"ما عاصمة **تشاد **",a:"نجامينا"},
    {q:"ما عاصمة ** شيلى**",a:"سانتياجو"},
    {q:"ما عاصمة **الصين **",a:"بكين"},
    {q:"ما عاصمة ** **",a:"مورونى"},
    {q:"ما عاصمة **كوستاريكا **",a:"سان خوسيه"},
    {q:"ما عاصمة ** كوت ديفوار**",a:"ابيدجان"},
    {q:"ما عاصمة **كرواتيا **",a:"زغرب"},
    {q:"ما عاصمة ** كوبا**",a:"هافانا"},
    {q:"ما عاصمة ** قبرص**",a:" "},
    {q:"ما عاصمة ** جمهورية التشيك**",a:"براغ"},
    {q:"ما عاصمة **الدنمارك **",a:"كوبنهاجن"},
    {q:"ما عاصمة ** جيبوتى**",a:"جيبوتى"},
    {q:"ما عاصمة ** دومينيكا**",a:"روسيو"},
    {q:"ما عاصمة **الدومينيكان **",a:"سان دومينجو"},
    {q:"ما عاصمة **تيمور الشرقية **",a:"ديلى"},
    {q:"ما عاصمة **قطر  **",a:"الدوحة"},
    {q:"ما عاصمة **السعودية  **",a:"الرياض"},
    {q:"ما عاصمة **سوريا  **",a:"دمشق"},
    {q:"ما عاصمة **تركيا  **",a:"انقرة"},
    {q:"ما عاصمة **العراق  **",a:"بغداد"},
    {q:"ما عاصمة **البنان  **",a:"بيروت"},
    {q:"ما عاصمة **فلسطين  **",a:"القدس"},
    {q:"ما عاصمة **امريكا  **",a:"واشنطن"},
    {q:"ما عاصمة **الاردن  **",a:"عمان"},    
    {q:"ما عاصمة **السودان  **",a:"خرطوم"},
    {q:"ما عاصمة **المانيا  **",a:"برلين"},
    {q:"ما عاصمة **كندا  **",a:"اوتاوا"},
    {q:"ما عاصمة **البرازيل  **",a:"برازيليا"},
    {q:"**ما هي عاصمة**المغرب",a:"الرباط"},

    
    
   ];
   client.on("message", async message => {
	   var prefix = "$";
    if(message.content == prefix+"عواصم"){
        if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
        UserBlocked.add(message.guild.id)
        var ask = aoasm[Math.floor(Math.random() * aoasm.length)];
        let embed = new Discord.RichEmbed()
        .setTitle('سؤال عواصم')
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("RANDOM")
        .setDescription(ask.q);
        message.channel.sendEmbed(embed).then(msg=> msg.delete(20000))
        const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:10000});
            UserBlocked.delete(message.guild.id)
        msgs.forEach(result => {
           if(result.author.id == client.user.id) return;
           if(result.content == "عاصمة") return
           if(result.content == ask.a){

             let embeds = new Discord.RichEmbed()
             .setTitle(':white_check_mark: اجابة صحيحة')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** الإجابة صحيحة`);
                message.channel.sendEmbed(embeds);                return;
           } else {

                                  var embedx = new Discord.RichEmbed()
                .setTitle(':x:خطاء')
                .setAuthor(message.author.username, message.author.avatarURL)
                .setColor("RANDOM")
                .setDescription(`**${result.author.username}** الإجابة خاطئة`);
                message.channel.sendEmbed(embedx);
           }
     });
  }
});









client.on('message', async message => {
      //!fortnite Ninja solo pc
  let Client = require('fortnite');
  let fortnite = new Client('2bb97881-c068-4cba-b3b5-152abfc71c83');
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
    if(message.content.startsWith(prefix + "fortnite")) {
        let username = args[0];
        let platform = args[2] || 'pc';
        let gamemode = args[1];
        if(gamemode != 'solo' && gamemode != 'duo' && gamemode != 'squad' && gamemode != 'lifetime') return message.reply(`⚠️ **|  ${prefix}fortnite username solo/duo/squad/lifetime pc**`);
        
    if(!username) return message.reply('**Specify a username!**');
    
    let data = fortnite.user(username, platform).then(data => {
        let stats = data.stats;
        
        if(gamemode === 'solo') {
            let solostats = stats.solo;
            let score = solostats.score;
            let kd = solostats.kd;
            let matches = solostats.matches;
            let kills = solostats.kills;
            let wins = solostats.wins;
            let top3 = solostats.top_3;

            let ByEmbed = new Discord.RichEmbed()
            .setAuthor('Forntite Tracker Solo Stats')
            .setTitle(data.username+"'s Stats")
            .setColor("RANDOM")
            .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
            .addField('# | Wins:',wins,true)
            .addField('# | Kills:',kills,true)
            .addField('# | Score:',score,true)
            .addField("# | Matches:",matches,true)
            .addField("# | Kill/Death Ratio:",kd,true)
            .addField("# | Top 3:",top3,true)
            
            return message.channel.send(ByEmbed);
            
        }else if (gamemode === 'duo') {
            let Duostats = stats.duo;
            let score = Duostats.score;
            let kd = Duostats.kd;
            let matches = Duostats.matches;
            let kills = Duostats.kills;
            let wins = Duostats.wins;
            let top3 = Duostats.top_3;

            let ByEmbed = new Discord.RichEmbed()
            .setAuthor('Forntite Tracker Duo Stats')
            .setTitle(data.username+"'s Stats")
            .setColor("RANDOM")
            .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
            .addField('# | Wins:',wins,true)
            .addField('# | Kills:',kills,true)
            .addField('# | Score:',score,true)
            .addField("# | Matches:",matches,true)
            .addField("# | Kill/Death Ratio:",kd,true)
            .addField("# | Top 3:",top3,true)
            
        message.channel.send(ByEmbed);

        }else if(gamemode === 'squad') {
            let squadstats = stats.squad;
            let score = squadstats.score;
            let kd = squadstats.kd;
            let matches = squadstats.matches;
            let kills = squadstats.kills;
            let wins = squadstats.wins;
            let top3 = squadstats.top_3;
            
            let ByEmbed = new Discord.RichEmbed()
            .setAuthor('Forntite Tracker Squad Stats')
            .setTitle(data.username+"'s Stats")
            .setColor("RANDOM")
            .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
            .addField('# | Wins:',wins,true)
            .addField('# | Kills:',kills,true)
            .addField('# | Score:',score,true)
            .addField("# | Matches:",matches,true)
            .addField("# | Kill/Death Ratio:",kd,true)
            .addField("# | Top 3:",top3,true)
            
            return message.channel.send(ByEmbed);
            
        }else {
            
        
        let lifetime = stats.lifetime;
        let score = lifetime[6]['Score'];
        let mplayed = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let winper = lifetime[9]['Win%'];
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];
        
                    let ByEmbed = new Discord.RichEmbed()
            .setAuthor('Forntite Tracker Duo Stats')
            .setTitle(data.username+"'s Stats")
            .setColor("RANDOM")
            .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
            .addField('# | Wins:',wins,true)
            .addField('# | Kills:',kills,true)
            .addField('# | Score:',score,true)
            .addField("# | Matches:",mplayed,true)
            .addField("# | Kill/Death Ratio:",kd,true)
            .addField("# | Win Percentage:",winper,true)
            
        message.channel.send(ByEmbed);
    }
    })
    }
});















client.on('message', message => {
      if(message.content.startsWith ("$طلاق")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' 😏 **لازم تمنشن وحدة **').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' 😳 **انت متزوج 2؟**').catch(console.error);
       if(proposed === message.author) return message.reply(`**مراتك خنثى **`);
        if(proposed === client.user) return message.reply(`** تبي تتطلقني **`);
              message.channel.send(`**${proposed} 
 انتي طالق في الثلاث  ${message.author} 
                   **`)

const filter = m => m.content.startsWith("اقلب وجهك");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` **${message.author} و ${proposed} الف الف مبروك الله , يرزقكم الذرية الصالحة** `);
})

   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  **${message.author} تم رفض عرضك** `);
})
        
  }
});















client.on('message',async message => {
 
  if(message.content.startsWith(prefix + "setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});//ToxicCodes CopyRights
 
client.on('message',async message => {
  if(message.content.startsWith(prefix + "setmember")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Members Count : [ ${message.guild.members.size} ]` , 'voice').then(c => {
    console.log(`Count Members channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName(`Members Count : [ ${message.guild.members.size} ]`)
    },1000);
  });
  }
});//ToxicCodes CopyRights
 
 
client.on('message',async message => {
  if(message.content.startsWith(prefix + "settime")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermission(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel("🕐 - Time  00", 'voice').then((c) => {
    console.log(`Time channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });//ToxicCodes CopyRights
        setInterval(function() {
 
      var currentTime = new Date(),
      hours = currentTime.getHours() + 3 ,
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds(),
      years = currentTime.getFullYear(),
      month = currentTime.getMonth(),
      day = currentTime.getDate(),
      week = currentTime.getDay();
 
      if (minutes < 10) {
          minutes = "0" + minutes;
      }
      var suffix = "AM";
      if (hours >= 12) {
          suffix = "PM";
          hours = hours - 12;
      }
      if (hours == 0) {
          hours = 12;
      }
 
      c.setName("🕐 - Time   「" + hours + ":" + minutes  +" " + suffix + "」");
    },1000);
  });
  }
});//ToxicCodes CopyRights
 
 
 
client.on('message',async message => {
  if(message.content.startsWith(prefix + "setdate")) {
      var currentTime = new Date(),
      years = currentTime.getFullYear(),
      month = currentTime.getMonth() + 1,
      day = currentTime.getDate(),
      week = currentTime.getDay();
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel("📅 - Date " + "「" + day + "-" + month + "-" + years + "」" , 'voice').then(c => {
    console.log(`Date channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName("📅 - Date " + "「" + day + "-" + month + "-" + years + "」")
    },1000);
  });
  }
});//ToxicCodes CopyRights
 
 
client.on('message',async message => {
  var moment = require('moment');
    if(message.content.startsWith(prefix + "setdays")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel(`Day : ${moment().format('dddd')}` , 'voice').then(c => {
      console.log(`Day channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`📅 - Day : 「${moment().format('dddd')}」`);
      },1000);
    });//ToxicCodes CopyRights
    }
  })










client.login(process.env.BOT_TOKEN);

