// <BASICALS>
console.log("Connexion en cours...");
const { Client } = require('discord.js');
bot = new Client();
const token = require('./libraries/config').token
bot.login(token);
// </BASICALS>

bot.on("ready", function(){
    console.log("Bot connecté !")
    console.log("Guild number: " + bot.guilds.size)
	setInterval(changing_status, 15000);

    function changing_status() {
        let status = [`By Ichii#5999`, `Made with <3`, `${prefix}help`, `Watching Imgur.com !`, `${bot.guilds.size} Servers !`];
        let random = Math.floor(Math.random() * status.length);
        bot.user.setActivity(status[random], {type: "STREAMING", url: "https://www.twitch.tv/something"})
    }
})

module.exports = { bot }

require('./Features/Features')
require('./Commands/Commands')

// var a = "A5 en 8B"
// var b = new RegExp(/([A-H][1-8]|[1-8][A-H]) en ([A-H][1-8]|[1-8][A-H])/)
// if (b.test(a)) {
//   console.log("oui")
// }else{
//   console.log("non")
// }
// let l = Number(a.replace(/[A-H]/, ""))
// let n = Number(a.replace(/[A-H]/, ""))
bot.on('message', message => {
    switch(message.content.toUpperCase()) {
        case '!!!RESET':
            if (message.author.id == "530061924130488351") {
                message.delete()
                resetBot(message.channel);
                break;
            }
    }
});
function resetBot(channel) {
    channel.send('Resetting...')
    .then(msg => bot.destroy())
    .then(() => bot.login(token));
    channel.send("Bot has restarted successfully !")
}