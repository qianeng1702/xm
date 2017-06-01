$(function(){
		$(".lunboanniu1").mouseover(function(){
			$(".lunboanniu1").css('backgroundColor','rgba(0,0,0,.5)')
		});
	});
	$(function(){
		$(".lunboanniu1").mouseout(function(){
			$(".lunboanniu1").css('backgroundColor','rgba(0,0,0,.2)')
		});
	});
	$(function(){
		$(".lunboanniu2").mouseover(function(){
			$(".lunboanniu2").css('backgroundColor','rgba(0,0,0,.5)')
		});
	});
	$(function(){
		$(".lunboanniu2").mouseout(function(){
			$(".lunboanniu2").css('backgroundColor','rgba(0,0,0,.2)')
	});
	$(".lunboanniu1").click(function(){
//		console.log($(".new-ul").css("left"))
		var n = parseInt($(".new-ul").css("left"));//1215
		var m = 1240 ;
		if(n==0){
			m=0
		}
		var num = parseInt(n+m) ;
		$(".new-ul").animate({
			left:num,
		})
	});
	$(".lunboanniu2").click(function(){
		var n = parseInt($(".new-ul").css("left"));//1215
		var m = 1240 ;
		if(n==-2480){
			m=0
		}
		var num = parseInt(n-m) ;
		$(".new-ul").animate({
			left:num,
		});
	});
	});