require("./variables")()
const { RichEmbed } = require('discord.js')


class CustomEmbed extends RichEmbed {
	constructor(footer, text){super()
		this.setColor(embedcolor)
		this.setCredits(footer)
		
	}
	setCredits(name){
		var r = ''
		if(name){
			if(typeof name == "string") name = [name]
			for(var i in name){
				r+= name[i]+' • '
			}
		}
		r+= "Wyvern"
		this.setFooter(r)
	}
	setText(t){this.setDescription(t)}
	addText(t,t2=1){
		if(this.description){
			var a = this.description
			for(let i=0; i<t2; i++)a+="\n"
			this.setText(a+t)
		}else this.setText(t)
	}
}


module.exports = { CustomEmbed }