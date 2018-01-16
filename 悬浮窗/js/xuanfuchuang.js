  window.onload=function(){

			var box=document.getElementsByClassName("box")[0];
			var close=document.getElementsByClassName("close")[0];
			var cw =document.documentElement.clientWidth;
			var ch =document.documentElement.clientHeight;
			var ow=box.offsetWidth;
			var oh=box.offsetHeight;
			var speedX=5;
			var speedY=5;
			var t=setInterval(move,60);

			window.onresize=function(){     //onresize 检测屏幕的变化
				 cw =document.documentElement.clientWidth;
			     ch =document.documentElement.clientHeight;
			}

			function move(){

			  var x=box.offsetLeft;
			  var y=box.offsetTop;
			  x+=speedX;
			  y+=speedY;
			  if(y>(ch-oh)){
			  	console.log(123);
						y= ch -oh;
						speedY *=-1;

					}
					if(y<0){
						y=0;
						speedY *= -1;
					}
					if(x>(cw - ow)){
						x =cw-ow;
						speedX *= -1;
					}
					if(x<0){
						x= 0;
						speedX*= -1;
					}		
			  box.style.left=x+"px";
			  box.style.top=y+"px";
			}

			box.onmouseover=function(){
				clearInterval(t);
			}
			box.onmouseout=function(){
				t=setInterval(move,60);
			}

			close.onclick=function(){

				box.style.display="none";
			}
                 
  }