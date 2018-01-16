$(function(){


var aa=$("#aa");



//绑定事件
aa.addEventListener("mousewheel",fn1,false);//谷歌
aa.addEventListener("DOMMouseScroll",fn1,false);//火狐


function  fn1(e){


	console.log((e.wheelDelta));  //谷歌   上120   下-120
	if(e.wheelDelta>0){
      
       aa.style.background="blue";

	}else{

       aa.style.background="red";

	}

/*	console.log(e.detail) ;  //火狐  上 -3  下3

	if(e.detail<0){
      
       aa.style.background="blue";

	}else{

        aa.style.background="red";
	}*/


}

// aa  向上滚动执行上shang()   向下滚动执行xia()

/*mouseWheel(aa,fn1,fn2);


function fn1(){

	var width=parseInt(getStyle(aa,"width"))+10;
	var height=parseInt(getStyle(aa,"height"))+10;

	aa.style.width=width + "px";
	aa.style.height=height + "px";
}

function fn2(){

    var width=parseInt(getStyle(aa,"width"))-10;
	var height=parseInt(getStyle(aa,"height"))-10;

	aa.style.width=width + "px";
	aa.style.height=height + "px";

}
*/

})
	








