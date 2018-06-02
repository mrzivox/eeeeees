



const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = "/"; 


bot.on('message', message => {

  if(message.content.startsWith(prefix + "clear")) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send("Vous n'avez pas la permission !");
  
    let args = message.content.split("").slice(1);
  
    if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages a supprimer !")
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`${args[0]} message ont été supprimés ! `);
    })
  }
  });

//////Welcome/Bye///////////////////////////////////////////////  
  
bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenue ' + member.displayName + ' ' +  'je suis EliotBot je suis le robot de çe serveur')
    }).catch(console.error)
  });
 
//Clear///////////////////////////





bot.on('ready', () => {

    console.log('Bot started.');

});

bot.login('NDQ4NTcyNDI0NDY0NjI5Nzcw.DesDGQ.jdyDVt4HczbaoIJOIBMK4b7VTV4');


