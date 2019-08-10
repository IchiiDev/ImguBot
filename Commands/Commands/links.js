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
            .addField(`Rejoindre le serveur Support:`, `[ImguBot - Support](https://discord.gg/cUfCJZ)`) //put your own support server here
            .addField(`Voter pour le bot`, `[Aller sur discordbots](discordbot_link)`) //put your link to DiscordBots.org here
            .setFooter(`links - Awaken by ${message.member.user.tag}`)
            .setTimestamp()
        message.channel.send(embed)
    }
}

module.exports.commands = { links }
