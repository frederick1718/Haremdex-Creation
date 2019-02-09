const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("Hc! ")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});

bot.login('NDc2MDI2NzQzNDc2NzE1NTMx.DzbsEw.psgjHdpXV5gudYCgD7rgFd7EQFQ');

bot.on('message', message => {
    if (message.content === prefix + "help") {
        message.channel.sendMessage("Liste des commandes : \n -*help");
    }

    if (message.content === "Salut") {
        message.reply("Bien le bonjour. :grin:");
        console.log("Commande Salut effectué");
    }
});
