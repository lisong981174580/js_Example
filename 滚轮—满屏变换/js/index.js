$(function(){


var ul=$("ul")[0];
var li=$("li");
var height=parseInt(getStyle(li[0],"height"));

var flag1=true;
var flag2=true;
var num=0;

mouseWheel(ul,shang,xia);

function shang(){

	if(flag1){

	    flag1=false;
		num--;
		if(num<=0){
			num=0;
		};


		animate(ul, {top:-height*num},function(){
			flag1=true;
		});

   };

}


function xia(){

	if(flag2){

		flag2=false;

		num++;
		if(num>=li.length){
		num=li.length-1;
		};

		animate( ul, {top:-height*num},function(){
		flag2=true;
		} );

	};

}


})