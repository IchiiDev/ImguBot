const Discord = require('discord.js');
require("../../libraries/variables")

class links {
    constructor() {
        this.executable = ["text"]
    }
    execute(message, arg) {
        const embed = new Discord.RichEmbed()
            .setTitle("Liens")
            .setDescription("Liste des liens relatifs au bot:")
            .attachFile("assets/yourimage.png") //your banner image, delete this line and the next line if you will not use it
            .setImage("attachment://yourimage.png")
            .addField(`Inviter le bot:`, `[Lien d'invitation](${invite_link})`)
            .addField(`Rejoindre le serveur Support:`, `[ImguBot - Support](https://gg.discord.fr)`)
            .addField(`Voter pour le bot`, `[Aller sur discordbots](https://discordbots.org/bot/576104086479568916)`)
            .setFooter(`links - Awaken by ${message.member.user.tag}`)
            .setTimestamp()
        message.channel.send(embed)
    }
}

module.exports.commands = { links }