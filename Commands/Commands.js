require("../libraries/variables")
CustomEmbed = require('../libraries/CustomEmbed').CustomEmbed
const fs = require('fs');

var MyCommands = new Object()
var dirsearch = ["Commands"]
dirsearch.forEach(i =>{
	fs.readdir("./Commands/"+i+"/", (err, files) => {
		for (file of files){
			if(file.startsWith("-"))continue
			var a = require("./"+i+"/"+file.slice(0, -3)).commands
			MyCommands = Object.assign(MyCommands, a)
		}
	})
})


bot.on('message', async message => {
	if (message.author.bot||message.content.length == 1||message.system)return
	if(!message.content.startsWith(prefix))return
	var arg = message.content.substring(prefix.length).split(" ");
	var command = arg[0].toLowerCase()
	if(typeof MyCommands[command] != "function")return
	var thecmd = new MyCommands[command]();
	try{if(thecmd.executable.indexOf(message.channel.type) == -1)return}catch{return}
	thecmd.execute(message, arg);
})


module.exports.variables = { MyCommands }