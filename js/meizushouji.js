$(function(){	
	$(".meizushoujiA").click(function(){		
			$(".meizushoujidiv").slideDown(1000,function(){
				$(".meizushoujidiv").css('display','block');
				
			});
//			$(".meizushoujili").animate({left: '+50px'}, "slow");	
	});
	$(".meizushoujiA").mouseout(function(){		
			$(".meizushoujidiv").slideUp(500,function(){
				$(".meizushoujidiv").css('display','none');
			});
	});
	
});		