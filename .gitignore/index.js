const Discord = require("discord.js");
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const db = low(adapter);

var prefix = ("Hc! ")

bot.on('ready', function() {
    bot.user.setGame("faire une grande maintenance ...");
    console.log("Le bot est connecté !");
});

bot . login ( processus . env . JETON );

bot.on('message', message => {
    if (message.content === prefix + "help") {
        message.channel.sendMessage("Liste des commandes : \n -*help");
    }

    if (message.content === "Salut") {
        message.reply("Bien le bonjour. :grin:");
        console.log("Commande Salut effectué");
    }

    if (message.content === prefix + "embed") {
        var embed = new Discord.RichEmbed()
            .setTitle("EMBED")
            .setDescription("Ceci est un embed")
            .addField(".help","Page d'aide", true)
            .addField("Embed01","Embed 01 ! :grin: Suivez les tuto de [PZH CODAGE](https://www.youtube.com/c/pzhcodage)", true)
            .setColor("0x58FAF4")
            .setFooter("Bon moment parmis nous ! ;)")
        message.channel.sendEmbed(embed);  
    }
});
