window.onload=function () {
	var list = document.getElementsByClassName('list')[0];
	var li = document.getElementsByClassName("li");
	var lc = document.getElementsByClassName("lc");
	var num;
	window.onscroll=function () {
		var sTop = document.body.scrollTop;
		if (sTop > 400) {
			list.style.display = "block";
		}else{
			list.style.display = "none";
		}
		for (var i = 0; i < lc.length; i++) {
			if (sTop > lc[i].offsetTop-1) {
				for (var j = 0; j < li.length; j++) {
					li[j].classList.add("hui");
				}
				li[i].classList.remove("hui");
				num = i;
			}
		}
	}
	for (var i = 0; i < li.length; i++) {
		li[i].index = i;
		li[i].onclick=function(){
			for (var j = 0; j < li.length; j++) {
				li[j].classList.add("hui");
			}
			animate(document.body,{scrollTop:lc[this.index].offsetTop},300);
		}
		li[i].onmouseover=function(){
			li[this.index].classList.remove("hui");
		}
		li[i].onmouseout=function(){
			if (this.index != num) {
				li[this.index].classList.add("hui");
			}
		}
	}


}