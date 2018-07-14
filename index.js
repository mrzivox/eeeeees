



const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = "/"; 


bot.on('message', message => {

  ////clear/////////////////////
  if(message.content.startsWith(prefix + "clear")) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !");
  
    let args = message.content.split(" ").slice(1);
  
    if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages a supprimer !")
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`${args[0]} messages ont été supprimés ! `);
    })
  }
  });

//////Welcome/Bye////////////////
  
bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenue ' + member.displayName + ' ' +  'je suis 🤖 Eliot Bot 🤖 je suis le robot de çe serveur')
    }).catch(console.error)
  });
 
//help///////////////////////////

if (message.content === prefix + "help"){
    var help_embed = new Discord.RichEmbed()
        .setColor ("#47d1d1")
        .setTitle("Menu d'aide")
        .addField("💡 Commandes d'infos 💡 :", "/info")
        .addField("🎉 Commandes funs : 🎉", "/fun")
        .addField("👮 Commandes de modérations 👮 : ", "/modo")
        .addField("🔍 Autres commandes 🔍 : ", "/other")
        message.channel.sendEmbed(help_embed);
    console.log(" Commande Help");
}



bot.on('ready', () => {

    console.log('Bot online .');

});

bot.login(process.env.TOKEN);


