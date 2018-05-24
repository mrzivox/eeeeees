const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "/";

client.login("V4Zbj9Zu_PRpD-cNB6pX_vhAZFJcqCL-");

client.on('message'), message => {

    if(message.content === "Bonjour"){
        message.reply("Salut");
        console.log('Le bot dit bonjour');
    });