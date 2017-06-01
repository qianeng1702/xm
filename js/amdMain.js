//包含或者调用模块
require(["person"],function(p){
	document.getElementById("ageText").value=p.getAge();	
	
});

function aa(){
	console.log("123");
}