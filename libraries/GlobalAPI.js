require("./variables")
function timeConvert(a){
	if(a <= 60)return a 
	return Math.floor(a / 60)+" minute et "+a % 60+" secondes"
}


module.exports.functions = { timeConvert }