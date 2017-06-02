//定义模块
define([],function(){
	
		var id="007";//对外开放(公有)
		var name="张三丰";//对外开放(公有)
		var age=25;//不对外开放（私有）
	
		return {
			id:id,
			name:name,
			setAge:function(transAge){
				if(transAge<0 || transAge>150){
					return;
				}
				age = transAge;			
			},
			getAge:function(){
				return age;
			}
		}	
		
});

