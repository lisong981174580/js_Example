$(function(){
		var anniuBox = $(".anniu")[0];
		var contentBox = $(".content")[0];
		var anniu = $("li",anniuBox);
		var content = $("li",contentBox);

		var t = setInterval(move,2000);
		var num = 0;
		function move(){
		     
            num++;
			if (num < 0) {
				num = content.length - 1;
			}
			if (num == content.length) {
				num = 0;
			}
			for (var i = 0; i < anniu.length; i++) {
				anniu[i].style.background = "red";
				content[i].style.opacity = 0;
			}
			anniu[num].style.background = "black";
			content[num].style.opacity = 1;

			 
				
		}
		
		var box = $(".box")[0];

		box.onmouseover=function(){
			clearInterval(t);
		}
		box.onmouseout=function(){
			t = setInterval(move,2000);
		}

		for (var j = 0; j < anniu.length; j++) {
			anniu[j].index = j;
			anniu[j].onmouseover=function(){
				num = this.index-1;
				move();
			}
		}

		var btn_left = $("#left");
		var btn_right = $("#right");

		btn_right.onclick=function(){
			move();
		}
		btn_left.onclick=function(){
			num -= 2; 
			move();
		}


	})	
