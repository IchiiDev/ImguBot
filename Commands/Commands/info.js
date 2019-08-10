const Discord = require("discord.js")

class info {
    constructor() {
        this.executable = ["text"]
    }
    execute(message, arg) {
        const embed = new Discord.RichEmbed()
            .setTitle("Informations")
            .setDescription("Imgur est un bot créé par Ichii#5999 servant à upload des images sur [imgur](https://imgur.com).")
            .addField("Upload une image", "Pour envoyer une image en ligne, faites simplement im/imgur suivit du lien de votre image ou envoyez votre image en piece jointe.")
            .addField("Avis sur la sécurité des données", "```Certains ont surement peur de où peuvent partir leur données et images. C'est pourquoi je suis obligé de spécifier où vont les images envoyées via le bot. En vérité, elle sont stockées dans une base de donnée chinoise, utilisées pour vous surveiller ! Nan, plus sérieusement, les images ne transitent que par Discord, l'API Imgur que nous utilisons nous permet d'upload des images via des liens, et les liens sont supprimés aussitot par le bot, ce qui fait qu'elles ne sont plus accessibles ! De plus, aucun lien n'est accessible via le bot. Si vous le souhaitez vous pouvez verifier notre code à cette page:``` [ImguBot - GitHub](https://github.com/IchiiSama/ImguBot)")
            .attachFile("assets/yourimage.png") //your banner image, delete this line and the next line if you will not use it
            .setImage("attachment://yourimage.png")
            .addField("ImguBot code by Ichii#5999", "Original bot code was made by Ichii#5999, you can find it here at the [ImguBot Repository](https://github.com/IchiiSama/ImguBot)")
            .setFooter(`links - Awaken by ${message.member.user.tag}`)
            .setTimestamp()
        message.channel.send(embed)
    }
}

module.exports.commands = { info }