
/** 
 * 1、绘制矩形
 * x:矩形起点的X坐标
 * y:矩形终点的Y坐标 
 * width:矩形的宽度 
 * height:矩形的高度 
 * isClear:是否绘制清除画布的矩形区域，true则就是绘制一个清除画布矩形区域，
 * isFill:是否是填充，false为绘制边框，true为绘制填充 
 * bgColor:矩形的颜色，若为填充则为整个矩形背景色，边框则为边框色 
 * */  

function rect(x, y, width, height, isClear, isFill, bgColor) {  
    if (isClear) { //为true表示绘制清除画布的矩形区域,那么传入的isFill, bgColor值可以为任意值  
        cxt.clearRect(x, y, width, height);  
    } else { //false  
        if (isFill) { //为true，则绘制填充矩形  
            cxt.fillStyle = bgColor;  
            cxt.fillRect(x, y, width, height);  
        } else { //为false,则绘制边框矩形  
            cxt.strokeStyle = bgColor;  
            cxt.strokeRect(x, y, width, height);  
        }  
    }  
  
}  
/** 
 * 2、绘制圆弧
 * x:圆心X坐标 
 * y:圆心Y坐标 
 * startAngle:开始的弧度 
 * endAngle:结束的弧度 
 * anticlockwise:true为逆时针，false为顺时针 
 *isOnlyArc变量来标记true为仅仅绘制弧边
 * isFill:是否是填充，false为绘制边框，true为绘制填充 
 * bgColor:圆弧的颜色 
 * */  
function circle(x, y, radius, startAngle, endAngle, anticlockwise, isOnlyArc, isFill, bgColor) {  
    if (isFill) { //为true绘制填充圆弧  
        cxt.fillStyle = bgColor;  
        cxt.beginPath();  
        cxt.arc(x, y, radius, getAngle(startAngle), getAngle(endAngle), anticlockwise);  
        cxt.closePath();  
        cxt.fill();  
    } else { //为false绘制边框圆弧  
        cxt.strokeStyle = bgColor;  
        cxt.beginPath();  
        cxt.arc(x, y, radius, getAngle(startAngle), getAngle(endAngle), anticlockwise);  
        if (isOnlyArc) { //绘制边框的另一种情况就是仅仅绘制弧边不需要调用closePath()  
  
        } else { //否则就是不仅绘制边框还得绘制起点和终点的连线，需要调用了closePath();  
            cxt.closePath();  
        }  
  
        cxt.stroke();  
    }  
}  


/**
 3、绘制线段
 
 
 * startX:表示线的起点的X坐标 
 * startY:表示起点的Y坐标 
 * endX:表示线的终点的X坐标 
 * endY:表示线的终点的Y坐标 
 * lineWidth:表示线段的宽度 
 * bgColor:线的颜色 
 * */  
function line(startX, startY, endX, endY, lineWidth, bgColor) {  

    cxt.beginPath();  
    cxt.lineWidth = lineWidth;  
    cxt.fillStyle = bgColor;//经过测试不管是fillStyle还是StrokeStyle都是一样的  
    cxt.moveTo(startX, startY);  
    cxt.lineTo(endX, endY); 
    cxt.closePath(); 
    cxt.stroke();    
  
}  

  
//将角度转换成弧度函数，  
function getAngle(arc) {  
    return Math.PI * (arc / 180);  
}  

//画三角形
/*
x0,y0：第一个点的坐标，既画笔触点
x1,y1:第二个点的坐标
x3,y3:第三个点的坐标
 isFill：是否填充
 bgColor：填充颜色

* */
function triangle(x0,y0,x1,y1,x2,y2,isFill,bgColor) {
    cxt.moveTo(x0,y0);
    cxt.lineTo(x1,y1);
    cxt.lineTo(x2,y2);

    cxt.closePath();
    if(isFill){
        cxt.fillStyle=bgColor;
        cxt.fill();
    }else{
        cxt.strokeStyle=bgColor;
        cxt.stroke();
    }




}