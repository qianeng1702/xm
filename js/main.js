
/*
require(["Mirror02"],function(mirror){
	document.getElementById("#boxSmall01").mirror({
		smallBoxId: "#boxSmall01",                      
		smallImgId: "#img01",                      
		imgPath: "images/2.jpg",                  
		
		baseLeft: 0,    //图片容器初始的left                    
		baseTop: 0,     //图片容器初始的top                    
		baseWidth: 128,    //图片容器的width                
		baseHeight: 201.6,  //图片容器的height                    
		mirrorWidth: 50,                     
		mirrorHeight: 50,                    
		multiple: 5,
		position:"下"
	});
});

*/

require.config({
	paths:{
		"jQuery":"jquery-1.8.3.min"
	}
});

require(["jQuery"],function(jQ){
	$("#btn01").click(function(){
		alert("您好！");		
	});
});
