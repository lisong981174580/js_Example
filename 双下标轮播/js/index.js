$(function () {
	
	//获取元素
	var banner=$(".banner")[0];//大盒子
	var img=$(".img");// [img1 img2 img3 img4]   //图片元素
	var btn=$(".btn");// [btn1 btn2 btn3 btn4]   //按钮
	var left=$(".left")[0];    //左边箭头                  
	var right=$(".right")[0];  //右边箭头

    //对所有图片的为值进行初始化，先让所有右移，只让第一张在原位
	for (var i = 0; i < img.length; i++) {
		img[i].style.left = "800px";
	}
	img[0].style.left=0;

	//对所有按钮进行初始化，先让所有都为黑色，然后第一个变成白色
	for(var i=0;i<btn.length;i++){

		btn[i].style.background="#000";
	}
	    btn[0].style.background="#fff";

   //定义两个变量，分别表示当前页和下一页
	var now = 0;
	var next = 0;
    //定义一个开关控制左右跳转
	var flag = true;

    //每2s执行一次move
	var t = setInterval(move,2000);

    //move函数
	function move(type){
		var type = type || "r";
		//进来后先自加，因为要显示下一张
		next++;
		if (next >= img.length) {
			next = 0;
		}
		if (next <= -1) {
			next = img.length-1;
		}

        //顺跳以及反跳
		if (type == "r") {
			img[next].style.left = "800px"
			animate(img[now],{left:-800});
		}else{
			img[next].style.left = "-800px"
			animate(img[now],{left:800})
		}

        
        //让下一张回到原位显示
		animate(img[next],{left:0},function(){
			now = next;
			flag = true;
		});
        
        //让对应大按钮变成白色
		for (var i = 0; i < btn.length; i++) {
			btn[i].style.background = "#000";
		}
		btn[next].style.background = "#fff";
	}

    //鼠标移入banner后让其停止动画
	banner.onmouseover = function(){
		clearInterval(t)
	}
	//鼠标移出banner后动画继续
	banner.onmouseout = function(){
		t = setInterval(move,2000)
	}

    //鼠标点击效果，点击在按钮上让其跳转到对应张数上
	for (var i = 0; i < btn.length; i++) {
		btn[i].index = i;
		btn[i].onclick = function(){
			//因为要执行的是当前页，所以执行函数之前让其先减一进入函数后再加一抵消
			next = this.index-1;
			//顺跳
			if (now < this.index) {
				move();
			}
			//反跳
			if (now > this.index) {
				move("l");
			}
		}
	}

    //左右箭头调转
	right.onclick=function(){
		if (flag) {
			//定义开关的目的是防止连续跳转，导致视觉混乱
			flag=false;
			move();
		}
	}
	left.onclick=function(){
		if (flag) {
			flag=false;
			//此处要抵消两张
			next -= 2;
			move("l");
		}
	}

})