			function getId(str){
				return document.getElementById(str);
			}
			function getStyle(obj,attr){
				if(obj.currentStyle){
					return obj.currentStyle[attr];
			}else{
					return getComputedStyle(obj,null)[attr];
				}
			}
			
			var oWrap = document.getElementsByClassName("newUl");
			var oSlide = document.getElementsByClassName("new-div");
			var iWidth = parseInt(getStyle(oWrap,"width"));
			var oList =document.getElementsByClassName("newUl1");
			var oLi = oList.getElementsByClassName("new-div1");
			var oLen = oLi.length;
			var oNext = getId("next");
			var oPrev = getId("prev");
			var m = 0;  //当前第几张图的索引
			var timer = null;			
			//下面圆点鼠标移上
			for(var i=0;i<oLen;i++){
				oLi[i].index = i;  //存储index属性
				oLi[i].onmouseover = function(){
					for(var j=0;j<oLen;j++){
						oLi[j].className = "";
					}
					oLi[this.index].className = "active";
					m = this.index; //将index复制给m，全局也知道当前是第几张图
					move(oSlide,{"left":(-1)*m*iWidth+"px"});
				}
			}
			// next的点击
			oNext.onclick = function(){
				m++;
				if(m==oLen+1){
					oSlide.style.left = "0";
					m=1;
				}
				move(oSlide,{"left":(-1)*m*iWidth+"px"});
				
				for(var i=0;i<oLen;i++){
					oLi[i].className = "";
				}
				oLi[m%oLen].className = "active";
			}
			// prev的点击
			oPrev.onclick = function(){
				m--;
				if(m==-1){  //第一张在往前点击改到最后一张
					m=oLen-1;
					oSlide.style.left = (-1)*oLen*iWidth+"px";
				}
				move(oSlide,{"left":(-1)*m*iWidth+"px"});
				for(var i=0;i<oLen;i++){
					oLi[i].className = "";
				}
				oLi[m%oLen].className = "active";
			}