const Discord = require("discord.js")
const _imgur = require('imgur');

class imgur {
    constructor() {
        this.executable = ["text"]
    }
    execute(message, args) {
        if (message.attachments.size > 0) {
            var attachement_image = message.attachments.first()
            var image = attachement_image.url
        }
        else {
            var image = args[1]
        }
        if(!image) return message.channel.send(`Veuillez mettre le lien de votre image ou de l'envoyer en piece jointe afin de l'héberger sur imgur !
    > __Exemple à suivre__ :
    > **im/imgur <https://cdn.discordapp.com/attachments/561838696878309382/609073533708009489/telechargement.png>**`)
    
        _imgur.uploadUrl(image)
        .then(function (json) {
            const iEmbed = new Discord.RichEmbed()
            .setDescription(`Veuillez utiliser ce lien : **<${json.data.link}>**`)
            .setTimestamp()
            .setFooter(`imgur - Awaken by ${message.author.tag}`,)
            .setImage(`${json.data.link}`)
            message.channel.send(iEmbed)
            message.delete()
        })
        .catch(function (err) {
            switch (err.message) {
                case "Invalid URL":
                    message.channel.send("Erreur, ceci n'est pas une URL valide, merci de spécifier une image !")
                    break;
                case object:
                    message.channel.send("Erreur, ceci n'est pas l'URL d'une image, nous vous demandons s'il vous plait de nous envoyer un lien valide !")
                    break;
                default:
                    console.error(err.message);
                    message.channel.send(`Nous sommes désolés mais il y a une erreur : \`${err.message}\` !
            _Envoyez ceci à Ichii#5999 afin de régler ceci si besoin_ !`)
            break;
            }
        });
    }
}

module.exports.commands = { imgur }