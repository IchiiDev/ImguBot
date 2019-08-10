require("../libraries/variables")
CustomEmbed = require('../libraries/CustomEmbed')
const fs = require('fs');
var dirsearch = ["features"]
dirsearch.forEach(i =>{
	fs.readdir("./Features/"+i+"/", (err, files) => {
		for (file of files){
			if(file.startsWith("-"))continue
			require("./"+i+"/"+file.slice(0, -3))
		}
	})
})