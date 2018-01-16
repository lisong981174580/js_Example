$(function(){

	var list=document.getElementsByClassName("list")[0];
	var li=document.getElementsByClassName("li");
	var lc=document.getElementsByClassName("lc");

	//检测鼠标滚轮变化
	window.onscroll=function(){
	    //鼠标滚轮距离浏览器顶部距离
		var sTop=document.body.scrollTop;
	    if(sTop>=400){
	       list.style.display="block";
		}else{
			list.style.display="none";
		}


		for(let i=0;i<lc.length;i++){

			if (sTop >=lc[i].offsetTop) {
				for (var j = 0; j < li.length; j++) {
					li[j].style.cssText = "background:#000;color:#fff;"
				}
				li[i].style.cssText =　"background:#fff;color:#000;"
			}
		}


	}



	for(var i=0;i<li.length;i++){

		li[i].index=i;
		li[i].onclick=function(){

	    animate(document.body,{scrollTop:lc[this.index].offsetTop});
	    
		}
    }






})