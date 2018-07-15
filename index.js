const Discord = require('discord.js');
const CLEAR_MESSAGES = '@clearMessages';
var bot = new Discord.Client();
var prefix = ("/")

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[/help]', type: 0}});
    console.log("Le bot a démarré !");
});

bot.on("guildMemberAdd", member => {
  member.guild.channels.find("name", "discussion").send(`Salut ${member}, Bienvenue sur Passion Communauty , Vien partager ta passion avec nous ! 👍`)
})

bot.on("guildMemberRemove", member => {
  member.guild.channels.find("name", "discussion").send(`${member} est parti de Passion Communauty , il partagera plus avec nous ! 👎 `)
})

//////////////////////////////////////////
bot.on('message', message => {

  if (message.content.startsWith(prefix + "sondage")) {
    if(message.author.id == "239503595052072960"){
      let args = message.content.split(" ").slice(1);
      let thingToEcho = args.join(" ")
      var sondage = new Discord.RichEmbed()
      .setDescription("📊 Sondage 📊")
      .addField(thingToEcho, "Repondre avec :white_check_mark: ou :x:")
      .setColor("#47d1d1")
      .setTimestamp()
      message.guild.channels.find("name", "📊sondage📊").sendEmbed(sondage)
      .then(function (message) {
        message.react("✅")
        message.react("❌")
      }).catch(function() {
      });
    }else{
      return message.reply(":x: Tu n'as pas les permissions . :x:")
  }
}



if(message.content.startsWith(prefix + "clear")) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !");
  
    let args = message.content.split(" ").slice(1);
  
    if(!args[0]) return message.channel.send("❌ Tu dois préciser un nombre de messages a supprimer ! ❌")
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`${args[0]} messages ont été supprimés ! 🚮 `);
    })
  }


  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");

  switch (args[0].toLowerCase()) {
      case "surprise":

      var about_embed = new Discord.RichEmbed()

      .setColor("#FE8F01")
      .setTitle("🎂 Commande Cachée 🎂")
      .addField("Bravo tu as trouvé la commande cachée ! 👍")
      message.delete();
      message.author.send({embed: about_embed});
      console.log("Commande surprise")
  }

        if (message.content === prefix + "info"){
            var info_embed = new Discord.RichEmbed()
                .setColor("#47d1d1")
                .setTitle("💡 Commandes d'informations 💡 :")
                .addField("/help :", "Affiche les commandes")
                .addField("/serveur :", "affiche des information du serveur .")
                ///.addField("/ping :" ,"Affiche le ping .")
                .addField("/bot :" ,"Affiche les information du bot ! ")

                message.channel.sendEmbed(info_embed);
                console.log("Commande Info");
        }
        if(message.content.startsWith(prefix + "mute")) {
            if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("❌ Désolé, vous n'avez pas les permissions pour executer la commande ! ❌");
    
            if(message.mentions.users.size === 0) {
                return message.channel.send('❌ Vous devez mentionner un utilisateur ! ❌');
    
            }
    
            var mute = message.guild.member(message.mentions.users.first());
            if(!mute) {
                return message.channel.send("❌ L'utilisateur est introuvable ou inexistant ! ❌");
            }
    
            if(!message.guild.member(bot.user).hasPermission("MUTE_MEMBERS")) return message.channel.send("❌ Je n'ai pas la permission pour executer la commande ! ❌");
            message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
                message.channel.send(`${mute.user.username} est désormais mute ! 🤐`);
                console.log("commande mute")
            })
        }
    
        if(message.content.startsWith(prefix + "unmute")) {
            if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("❌ Désolé, vous n'avez pas les permissions pour executer la commande ! ❌");
    
            if(message.mentions.users.size === 0) {
                return message.channel.send('❌ Vous devez mentionner un utilisateur ! ❌');
    
            }
    
            var mute = message.guild.member(message.mentions.users.first());
            if(!mute) {
                return message.channel.send("❌ L'utilisateur est introuvable ou inexistant ! ❌");
            }
    
            if(!message.guild.member(bot.user).hasPermission("MUTE_MEMBERS")) return message.channel.send("❌ Je n'ai pas la permission pour executer la commande ! ❌");
            message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
                message.channel.send(`${mute.user.username} est désormais démute ! 😃`);
                console.log("unmute !")
            })
        }


if (!message.content.startsWith(prefix)) return;

var args = message.content.substring(prefix.length).split(" ");

switch (args[0].toLowerCase()) {
    case "serveur":

    var userCreateDate = message.author.createdAt.toString().split(" ");
    var msgauthor = message.author.id;

    var stats_embed = new Discord.RichEmbed()

    .setColor("#47d1d1")
    .setTitle("📒 Information Serveur 📒")
    .addField("👨‍👩‍👧‍👦  Nombre d'utilisateurs sur le serveur ! 👨‍👩‍👧‍👦 :", message.guild.members.size)
    .addField("📌 Nombre de salons ! 📌 :", message.guild.channels.size)
    message.reply("Je t'ai envoyé les informations du serveur en message privé ! ")
    message.author.send({embed: stats_embed});
    console.log("Commandes stats")
 } 
 


 if (!message.content.startsWith(prefix)) return;

var args = message.content.substring(prefix.length).split(" ");

switch (args[0].toLowerCase()) {
    case "bot":

    var userCreateDate = message.author.createdAt.toString().split(" ");
    var msgauthor = message.author.id;

    var stats_embed = new Discord.RichEmbed()

    .setColor("#47d1d1")
    .setTitle("🤖 Information Bot 🤖")
    .addField("Nom 🎫 :", "**Eliot'Bot**")
    .addField("Tag : :hash:", `#${bot.user.discriminator}`)
    .addField("ID : :id:", `${bot.user.id}`)
    .addField("Version 🆚 :", "Eliot'Bot est en version 1.0")
    message.reply("Je t'ai envoyé les stats du bot en message privé ! ")
    message.author.send({embed: stats_embed});
    console.log("Commandes info")
 } 


        if (message.content === prefix + "staff"){
            var modo_embed = new Discord.RichEmbed()
                  .setColor("#47d1d1")
                  .setTitle("👮 Commandes de staff 👮")
                  .addField("/clear :", "Supprime les messages d'un channel .")
                  .addField("/mute | /unmute :", "Permet de mute / demute une personne sélectionnée .")
                  .addField("/warn | /unwarn :", "Permet de warn / unwarn une personne sélectionnée .")
                  .addField("/sondage : permet de faire un sondage .")
                  .addField("/listwarns", "Affiche les warns de la personne sélectionnée .")
                  //.addField("/kick :", "Expulse une personne sélectionnée du serveur .")
                  //.addField("/ban :", "Ban une personne sélectionnée du serveur .")
                  message.channel.sendEmbed(modo_embed);
                  console.log("Commandes Modération");
              }

  
            if (message.content === prefix + "other"){
                var other_embed = new Discord.RichEmbed()
                  .setColor("#47d1d1")
                  .setTitle("🔍 Autres commandes 🔍")
                  .addField("/identity: ", "Affiche ma carte d'identitée .")
                  .addField("/invite :", "Cette commande vous donne un lien d'invitation . ")
              message.channel.sendEmbed(other_embed);
              console.log("Other Commandes ");
          
        }


        if (message.content === prefix + "help"){
            var help_embed = new Discord.RichEmbed()
                .setColor ("#47d1d1")
                .setTitle("Menu d'aide")
                .addField("💡 Commandes d'infos 💡 :", "**/info**")
                .addField("🎉 Commandes funs 🎉 : ", "**/fun**")
                .addField("👮 Commandes de staff 👮 : ", "**/staff**")
                .addField("🔍 Autres commandes 🔍 : ", "**/other**")
                message.channel.sendEmbed(help_embed);
            console.log(" Commande Help");
        }
        
        if (message.content === prefix + "fun"){
            var fun_embed = new Discord.RichEmbed()
                  .setColor("#47d1d1")
                  .setTitle("🎉 Commandes funs 🎉 :")
                  .addField("/? :", "Donne une réponse à une question donnée .")
                  message.channel.sendEmbed(fun_embed);
                  console.log("commandes fun");
          }



          bot.on('message', message => {
            if (message.content.startsWith(prefix + "?")) {
          let args = message.content.split(" ").slice(1);
          let tte = args.join(" ")
          if (!tte){
            return message.reply("❌ Veuillez poser une question ! ❌")};
        
            var replys = [
              "Oui",
              "Non",
              "Je ne sais pas",
              "Peut-être",
              "Peut-être pas",
              "Sa dépend",
              "Surement",
              "Sans doute",
              "Probablement",
              "Probablement pas",
              "Absolument",
              "Absolument pas"
            ];
        
            let reponse = (replys[Math.floor(Math.random() * replys.length)])
            message.channel.send(reponse)
            console.log("commande 8ball ")
        }})


          if (!message.content.startsWith(prefix)) return;

          var args = message.content.substring(prefix.length).split(" ");
  
          switch (args[0].toLowerCase()) {
              case "identity":
  
              var userCreateDate = message.author.createdAt.toString().split(" ");
              var msgauthor = message.author.id;
  
              var stats_embed = new Discord.RichEmbed()
  
              .setColor("#47d1d1")
              .setTitle(`🎫 Identité de l'utilisateur 🎫 : ${message.author.username}`)
              .addField(`ID de l'utilisateur :id:`, msgauthor, true)
              .addField("Date de création du compte :clock3: :", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
              .setThumbnail(message.author.avatarURL)
              message.reply("Je t'ai envoyé ton identité en message privé ! ")
              message.author.send({embed: stats_embed});
              console.log("Commandes statistiques")
           } 
           if (!message.content.startsWith(prefix)) return;

           var args = message.content.substring(prefix.length).split(" ");
         
           switch (args[0].toLowerCase()) {
               case "invite":
         
               var about_embed = new Discord.RichEmbed()
         
               .setColor("#47d1d1")
               .setTitle("📧 Commande Invitation 📧")
               .setDescription("https://discord.gg/KCnjMa6")
               message.author.send({embed: about_embed});
               console.log("Commande invite")
           }
     
if(message.content.startsWith(prefix + "00000000000000000000")) {
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("❌ Désolé, vous n'avez pas la permission nécessaire pour executer la commande ! ❌");

    if (message.mentions.users.size === 0) {
        return message.channel.send("❌ Vous devez mentionner un utilisateur ! ❌")

    }

    var kick = message.guild.member(message.mentions.users.first());
    if(!kick) {
        return message.channel.send("❌ L'utilisateur est introuvable ou inexistant ! ❌")
    }

    if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
        return message.channel.send("❌ Je n'ai pas la permission pour exécuter la commande ! ❌");
    }

    kick.kick().then(member => {
        message.channel.send(`${member.user.username} à été kick par ${message.author.username} `)
        console.log("kick");
    });
}

if(message.content.startsWith(prefix + "0000000000000000000000000")) {
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("❌ Désolé, vous n'avez pas les permissions pour executer la commande ! ❌")

    if(message.mentions.users.size === 0) {
        return message.channel.send("❌ Vous devez mentionner un utilisateur ! ❌")
    }

    var ban = message.guild.member(message.mentions.users.first());
    if (!ban) {
        return message.channel.send("❌ L'utilisateur est introuvable ou inexistant ! ❌:");
    }
    
    if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
        return message.channel.send("❌ Je n'ai pas la permission pour exécuter la commande ! ❌")
    }
    ban.ban().then(member => {
        message.channel.send(`${member.user.username} à été banni par ${message.author.username} ⛔`)
    }

    )
}

var fs = require('fs');
 
let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
 
if (message.content.startsWith(prefix + "warn")){
 
if (message.channel.type === "dm") return;
 
var mentionned = message.mentions.users.first();
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply(":x: Vous n'avez pas les permissions :x:").catch(console.error);
 
if(message.mentions.users.size === 0) {
 
  return message.channel.send(":x: Vous n'avez mentionnée aucun utilisateur :x:");
 
}else{
 
    const args = message.content.split(' ').slice(1);
 
    const mentioned = message.mentions.users.first();
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          if (args.slice(1).length != 0) {
 
            const date = new Date().toUTCString();
 
            if (warns[message.guild.id] === undefined)
 
              warns[message.guild.id] = {};
 
            if (warns[message.guild.id][mentioned.id] === undefined)
 
              warns[message.guild.id][mentioned.id] = {};
 
            const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;
 
            if (warns[message.guild.id][mentioned.id][warnumber] === undefined){
 
              warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};
 
            } else {
 
              warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),
 
                time: date,
 
                user: message.author.id};
 
            }
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
message.delete();
 
            message.channel.send(':warning: | **'+mentionned.tag+'** à été averti');
 
message.mentions.users.first().send(`:warning: **Warn |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))
 
          } else {
 
            message.channel.send(" :x: Erreur mauvais usage: (/warn) + (utilisateur) + (raison) :x: ");
 
          }
 
        } else {
 
          message.channel.send(" :x: Erreur mauvais usage: (/warn) + (utilisateur) + (raison) :x: ");
 
        }
 
      } else {
 
        message.channel.send(" :x: Erreur mauvais usage: (/warn) + (utilisateur) + (raison) :x: ");
 
      }
 
    } else {
 
      message.channel.send(":x: Vous n'avez pas les permissions :x:");
 
    }
 
  }
 
}
 
 
 
if (message.content.startsWith(prefix+"listwarns")||message.content===prefix+"listwarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply(":x: Vous n'avez pas les permissions :x:").catch(console.error);
 
    const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size !== 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          try {
 
            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              message.channel.send("**"+mentioned.tag+"** n'a aucun warn :warning:  ");
 
              return;
 
            }
 
          } catch (err) {
 
            message.channel.send("**"+mentioned.tag+"** n'a aucun warn :warning: ");
 
            return;
 
          }
 
          let arr = [];
 
          arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns :warning: ");
 
          for (var warn in warns[message.guild.id][mentioned.id]) {
 
            arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].raison+
 
            "**\" warn donné par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** le **"+warns[message.guild.id][mentioned.id][warn].time+"**");
 
 
          }
 
          message.channel.send(arr.join('\n'));
 
        } else {
 
          message.channel.send(":x: Erreur mauvais usage : (/listwarns) + (utilisateur) :x: ");
 
          console.log(args);
 
        }
 
      } else {
 
        message.channel.send(":x: Erreur mauvais usage : (/listwarns) + (utilisateur) :x: ");
 
      }
 
    } else {
 
      message.channel.send(":x: Vous n'avez pas la permission :x:");
 
    }
 
  }
 
 
 

 
  if (message.content.startsWith(prefix+"unwarn")||message.content===prefix+"unwarn") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply(":x: Vous n'avez pas la permission :x:").catch(console.error);
 
   const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    const arg2 = Number(args[1]);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
 
          if (!isNaN(arg2)) {
 
            if (warns[message.guild.id][mentioned.id] === undefined) {
 
              message.channel.send(mentioned.tag+" n'a aucun warn !");
 
              return;
 
            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
 
              message.channel.send(":x: Ce warn n'existe pas :x:");
 
              return;
 
            }
 
            delete warns[message.guild.id][mentioned.id][arg2];
 
            var i = 1;
 
            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
 
              var val=warns[message.guild.id][mentioned.id][key];
 
              delete warns[message.guild.id][mentioned.id][key];
 
              key = i;
 
              warns[message.guild.id][mentioned.id][key]=val;
 
              i++;
 
            });
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              delete warns[message.guild.id][mentioned.id];
 
            }
 
            message.channel.send(`Le warn de ${mentioned.tag}\': ${args[1]} a été enlevé avec succès !`);
 
            return;
 
          } if (args[1] === "tout") {
 
            delete warns[message.guild.id][mentioned.id];
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            message.channel.send(`Les warns de ${mentioned.tag} a été enlevé avec succès ! `);
 
            return;
 
          } else {
 
            message.channel.send(" :x: Erreur de mauvais usage : (/unwarn) + (utilisateur) + (nombre)  :x:");
 
          }
 
        } else {
 
          message.channel.send(" :x: Erreur de mauvais usage : (/unwarn) + (utilisateur) + (nombre)  :x:");
 
        }
 
      } else {
 
       message.channel.send(" :x: Erreur de mauvais usage : (/unwarn) + (utilisateur) + (nombre)  :x:");
 
      }
 
    } else {
 
      message.channel.send(" :x: Vous n'avez pas les permissions :x:");
 
    }
}},)


bot.login(process.env.TOKEN);


