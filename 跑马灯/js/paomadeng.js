$(function () {
//获取元素
    var marqueeBox=$(".marqueeBox")[0];
    var box=$(".box")[0];
    var right=$(".right")[0];
    var left=$(".left")[0];
//定义延时函数
    var t=setInterval(move,2000);
    function move(type) {
        //每次进来后获取第一个元素
        var first=box.firstElementChild;
        //当点击left的时候
        if(type=="l"){
            //获取box最后一个元素对象
            var last=box.lastElementChild;
            //擦除最后一个
            box.removeChild(last);
            //将最后一个添加到第一个元素的前面
            box.insertBefore(last,first);
            //先让box左移-295
            box.style.marginLeft="-295px";
            //然后进行动画实现效果
            animate(box,{marginLeft:0});
        }else{
            //动画 让box左移-295
            animate(box,{marginLeft:-295},function () {
                //擦除box第一个元素节点
                box.removeChild(first);
                //将box第一个元素节点加到后面
                box.appendChild(first);
                //让box盒子复位
                box.style.marginLeft=0;
            })
        }

    }
    
    //鼠标移入marqueeBox事件函数停止
    marqueeBox.onmouseover=function () {
        clearInterval(t);
    }
    //鼠标移出marqueeBox时间函数继续
    marqueeBox.onmouseout=function () {
        t=setInterval(move,2000);
    }

    //给左右添加鼠标点击效果
    //右边直接执行一次move（）；
    right.onclick=function () {
        move();
    }
    //左边需要和right做相反的处理
   left.onclick=function () {

       move("l");

    }
})