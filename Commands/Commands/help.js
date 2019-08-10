const Discord = require('discord.js');
const embedcolor = require('../../libraries/variables')

class help{
    constructor() {
        this.executable = ["text"]
    }
    execute(messages, arg) {
        const embed = new Discord.RichEmbed()
            .setTitle("Aide")
            .setDescription("Détails des commandes disponibles :D")
            .setColor(`${embedcolor}`)
            .setTimestamp()
            .addField(`<:imgear:608600439897980930> Informations`,"`help`, `links`, `info`")
            .addField(`<:imgur:608602855204454401> Upload`, "`imgur`")
            .attachFile("assets/yourimage.png") //your banner image, delete this line and the next line if you will not use it
            .setImage("attachment://yourimage.png")
            .setFooter(`help - Awaken by ${messages.member.user.tag}`)
        messages.channel.send(embed)
    }
}

module.exports.commands = { help }