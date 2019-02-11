const Discord = require("discord.js");
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const client = new Discord.Client();

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoire: [], xp: []}).write()

var prefix = ("Hc! ")

bot.on('ready', function() {
    bot.user.setGame("faire une grande maintenance ...");
    console.log("Le bot est connecté !");
});

//bot . login ( processus . env . JETON );
bot . login ( NDc2MDI2NzQzNDc2NzE1NTMx.D0JN4A.X4s8nX-sdsR5NC1xq01Mw--StLo ) plus grand centre commercial

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

bot.on('message', message => {

    var msgauthor = message.author.id;

    if(message.author.bot)return;

    if(!db.get("xp").find({user: msgauthor}).value()) {
        db.get("xp").push({user: msgauthor, xp: 1}).write();
    }else{
        var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
        console.log(userxpdb)
        console.log(`Nombre d'xp: ${userxp[1]}`)

        db.get("xp").fill({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] <= 1}).write();

    if (message.content === prefix + "xp") {
        var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
        var xpfinal = Object.values(xp);
        var xp_embed = new Discord.RichEmbed()
            .setTitle(`Stat des XP de ${message.author.username}`)
            .setColor("#58FAF4")
            .setDescription("Affichge des XP")
            .addField("XP :", `${xpfinal[1]}`)
            .setFooter("Enjoy :p")
        message.channel.send({embed: xp_embed});  
}}});
