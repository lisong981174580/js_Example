/**
 * Created by Administrator on 2017/4/23.
 */


//1、十行十列表格（封装函数）n行n列

//tr代表行，td代表列  都是number型    返回值是一个没有显示的表格  需要document.write引出
function table(tr,td) {
    var str="<table  align='center' border='1' cellspacing='0' cellpadding='10'>";
    for(var i=0;i<=tr;i++){
        var bg;
        if(i%2==0){
            bg="red";
        }else{
            bg="green";
        }
        str+="<tr  bgcolor="+bg+">";
        for(var j=0;j<=td;j++){

            str+="<td align='center'>第"+i+"行<br>第"+j+"列</td>";
        }
        str+="</tr>";
    }
    str+="</table>";
    return str;
}




//2、九九乘法表（封装函数）nn乘法表

//hang代表乘法表的上限  是number型    没有返回值，但运行完后直接显示乘法表
function chengfa(hang) {

    for(var i=1;i<=hang;i++){

        for(var j=1;j<=i;j++){

            document.write(" "+i+"×"+j+"="+i*j+"&nbsp&nbsp ");
            if(j==2&&(i==3||i==4)){

                document.write("&nbsp");
            }

        }
        document.write("<br>");
    }
}


//3、杨辉三角（封装函数）n行
//xing代表元素  是string型   hang代表行数 是number型   没有返回值，但运行完后直接显示现象
function  sanjiao(xing ,hang) {

    document.write("<p  align='center'>");
    for (var i=0;i<=hang;i++){

        for(var j=0;j<=i;j++){

            document.write("&nbsp"+xing+"&nbsp");
        }

        document.write("<br>");
    }
    document.write("</p>");
}


//4、密码输入限制，超过三次，输出禁止再次输入
// n代表次数  1234代表密码  没有返回值，直接出现象
function password(n) {
    var password;
    for(var i=1;i<=n;i++){

        if(i==1){
            password=prompt("请输入密码");
            if(password=="1234"){
                alert("登录成功");break;
            }
        }else{
            password=prompt("密码有误，请再次输入");
            if(password=="1234"){
                alert("登录成功");break;
            }
        }
        if(i==n && password!="1234"){

            alert("输入次数已达上限");
        }
    }
}






//8、遍历混合数组
//arr是数组名  返回值是一个由遍历出来的元素组成的新数组


function  bianliHunhe(arr) {
    var newarr=[];

    for(var i=0;i<arr.length;i++){

        if(typeof arr[i]=="object"){

            for(var j=0;j<arr[i].length;j++){

                if(typeof arr[i][j]=="object"){

                    for(var k=0;k<arr[i][j].length;k++){

                        newarr[newarr.length]=arr[i][j][k];

                    }

                }else{

                    newarr[newarr.length]=arr[i][j];
                }
            }

        }else{

            newarr[newarr.length]=arr[i];
        }
    }

    return newarr;
}



//9、去除数组中的空值
// arr是数组名  返回值是一个去空的新数组

function qukong(arr) {

    var newarr=[];
    for(var i=0;i<arr.length;i++){

        if(arr[i]!=""){

            newarr[newarr.length]=arr[i];
        }

    }

    return newarr;
}


//10、取出数组中重复的值

//arr是一个数组名  返回值是一个去重的新数组

function quchong(arr) {

    var newarr=[];
    for (var i=0;i<arr.length;i++){

        if(quchongchild(arr[i], newarr) ){

            newarr[newarr.length]=arr[i];
        }

    }

     return newarr;

}

function quchongchild(arrchild,newarr ) {
    for(var j=0;j<newarr.length;j++){

        if(arrchild==newarr[j]){
            return  false;

        }
    }
    return true;

}




//11、排序 sort( );

//arr是一个数组名  type是控制正反排序的值  是一个string型  如果正序则不用写这个值，如果倒序则写"desc"


function sort(arr,type) {
    type=type||"asc";
    var temp;
    for (var i = 0; i < arr.length; i++) {

        for (var j = i + 1; j < arr.length; j++) {

            if(type=="asc"){

                if (arr[i] > arr[j]) {

                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;

                }
            }


            if(type=="desc"){

                if (arr[i] < arr[j]) {

                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;

                }
            }


        }

    }

    return arr;

}


//12、push();在数组末尾添加多个元素，返回一个添加元素后的新数组，原数组不变

//没有形参，直接调用arguments对象，第一个实参写数组，之后的实参写要添加的元素，返回一个添加元素后的新数组，原数组不变
function push( ) {

    for(var i=1;i<arguments.length;i++){

          arguments[0][arguments[0].length]=arguments[i];

    }
    return arguments[0];
}



//13、pop()数组末尾删除一个元素，返回删除的元素
//arr是一个数组名    返回的是被删除的元素  愿数组变为删除后的数组

function pop(arr ) {
    var last=arr[arr.length-1];
    arr.length=arr.length-1;
    return last;
}
                


//14、unshift() 数组开头追加对个元素，返回数组的长度
//没有形参，直接调用arguments对象，第一个实参写数组，之后的实参写要添加的元素，返回一个添加元素后的新数组，原数组不变


function unshift( ) {

    var newarr=[];
    for(var i=1;i<arguments.length;i++){

        newarr[newarr.length]=arguments[i];
    }
    for(var j=0;j<arguments[0].length;j++){

        newarr[newarr.length]=arguments[0][j];
    }



    return  newarr;

}





//15、shift()数组开头删除一个元素，返回删除的元素
//arr是一个数组名    返回的是被删除的元素  愿数组变为删除后的数组

function shift(arr) {

    var first=arr[0];
    for(var i=0;i<arr.length;i++ ){

        arr[i]=arr[i+1];
    }

    arr.length=arr.length-1;
    return first;

}


//16、concat() 两个或多个数组相连，返回新数组，原来的数组不影响。
//没有形参，直接调用arguments对象，实参写要拼接的数组，可以是一个，也可以是多个   返回值是一个拼接后的新数组，愿数组不变

 function concat( ) {

 var newarr=[];
 for(var k=0;k<arguments.length;k++){

     for(var i=0;i<arguments[k].length;i++){
         newarr[newarr.length]=arguments[k][i];
     }
 }


 return newarr;

}


//17、偶数求和

//min是起点的数值可以取到   max是结尾的数值，不可以取到  都是number型   返回值是偶数的和

function  oushuHe(min,max) {

    var num=0 ;

    for(var i=min;i<max;i++){

        if(i%2==0){

            num+=i;
        }
    }
    return  num;
}


//18、判断一维数组中的最大值
//arr是数组名，返回的是最大值


function  arrMax(arr){

    var  arrMax=arr[0];
    for(var i=0;i<arr.length;i++){

        if(arrMax<arr[i]){

            arrMax=arr[i];
        }
    }

    return arrMax;
}

//19、在任意浏览器中可以通过类名获取元素,消除ie8以下版本的兼容性问题
//sel为要获取元素的类名，是string型，obj不写时则是在找document下的类名为sel的元素，写时找的是在obj下类名为sel的元素
function  getClass(sel,obj){
    
    //判断是否找子元素
    obj = obj || document;

    if (obj.getElementsByClassName) {
        return obj.getElementsByClassName(sel)
    }else{
       var arr=[];
        //找到所有元素
        var all=obj.getElementsByTagName('*');
        //遍历所有元素
        for(var i=0;i<all.length;i++){
            //获得所有元素类名
            var str=all[i].className;
            //判断类名是否满足条件    
            if(  choose( str ,sel  ) ){

                arr[arr.length]=all[i];
            }

        }
        //返回符合的元素
        return arr; 
    }
}
// 判断类名是否满足条件
function  choose(aa,bb  ){

    //先将字符串转化成数组，然后遍历它
    var newarr=aa.split(" ");

    for(var  i=0;i<newarr.length;i++){
        //若遍历出来的类名有一个和条件相同则返回真
        if(newarr[i]==bb){

            return  true;

        }

    }

    return false;

}

//例如：
// //调用该函数找到类名为5的元素
// var div1=getClass("box5");
// console.log(div1);
//
// //调用该函数找到类名为5的元素的子元素zhezhao
// var newarr=getClass("zhezhao",div1[0]);  //想想传数组
// console.log(newarr);


//20、获取内容与给内容赋值（函数）

//没有形参，直接调用arguments对象，传的第一个参数是通过js选择器获取到的元素如 aa;第二个参数是对aa重新赋值的内容，如果直传一个实参，则返回的是aa的html的内容
//如果传入两个参数，则是先将第二个实参的值先赋值给第一个aa的html内容，然后再返回 aa的html内容
//aa=document.getElementById('box');

function getText( ){

    if(arguments.length==2){

        arguments[0].innerHTML=arguments[1];
        return arguments[0].innerHTML;
    }else{

        return  arguments[0].innerHTML;
    }

}

//例如：
// getText(aa); //获取内容
// getText(aa,"李松");  //对内容赋值



//21、获取元素的样式  层级最高的

//形参obj是指通过js选择器选择到的元素aa;prop是指要获取的样式如"width",是string型，返回值是
//元素obj的prop样式；

//aa=document.getElementById('box');
function getStyle(obj,prop){
    if(obj.currentStyle==undefined){

        return  window.getComputedStyle(obj,null)[prop];
    }else{

        return obj.currentStyle[prop];
    }

}
//例如：
// console.log(getStyle(gg,"width"));


//22、通过函数 $()  获取元素，或执行  window.onload事件
//sel是标签名、或类名、或id名  是string型
//如果是标签名 则直接写标签名
//如果是类名 则写  .类名
//如果是id名，则写  #id名

//$ 两个功能
      //  执行onload
      //  花样获取元素

      function $(sel,obj){
                
               obj=obj || document;
               if(typeof sel=="function"){

                    // window.onload=sel;
                     window.onload=function(){

                        sel();
                     }
                

               }else if( typeof sel == "string" ){

                       if(sel.charAt(0)==".") {
                                
                           return  getClass(sel.slice(1),obj);

                       }else  if(sel.charAt(0)=="#"){
                          
                           return  obj.getElementById(sel.slice(1));

                       }else if(/^[a-z|1-6]{1,10}$/g.test(sel)){

                           return obj.getElementsByTagName(sel);

                       }else{

                        console.error("非法输入");
                       }  



                }

                 
        } 



//23、获得(节点obj)的所有子元素节点

function getEleChild(obj) {
    
    
    var arr=obj.childNodes;
    var newarr=[];
    for(var i=0;i<arr.length;i++){

        if(arr[i].nodeType==1){

            newarr[newarr.length]=arr[i];
        }
    }


    return  newarr;
}

//24、获取(节点obj)的第一个子元素节点

function firstEleChild(obj){

    return  getEleChild(obj)[0];
}

//25、获取(节点obj)的最后一个子元素节点

function lastEleChild(obj){

    return  getEleChild(obj)[getEleChild(obj).length-1];
}

//26、获取(节点obj)同级的下一个元素节点 
function  nextSiblingEle(obj){

    var next=obj.nextSibling;
    
    if(next==null){

        return null;
    }
  
    while(next.nodeType!=1){

        next=next.nextSibling;

        if(next==null){

            return null;
        }




    }
    return  next;
}



//27、在元素节点(befobj)的后面追加元素节点(newobj)

function inserAfter(newobj,befobj){
    var parent=befobj.parentNode;
    var next=nextSiblingEle(befobj);
    
    if(next==null){

        parent.appendChild(newobj);
        
    }else{

        parent.insertBefore(newobj,next);
        

    }

}


//28、获取页面宽高
function offsetWindow() {
    
    var x=document.documentElement.clientWidth;
    var y=document.documentElement.clientHeight;
    return {width:x,
           height:y}
}
 //offsetWindow().width   获取宽
 //offsetWindow().height  获取高
 

 /*29、测量元素obj 边框外到浏览器边框的距离*/


function getPosition(obj){
    var x=obj.offsetLeft;
    var y=obj.offsetTop;
    
    var parent=obj.parentNode;

    while(parent.nodeName !="BODY"){

        if(getStyle(parent,"position")=="absolute"||getStyle(parent,"position")=="relative"){
            x+=parseInt(getStyle(parent,"borderLeftWidth"));
            x+=parent.offsetLeft;

            y+=parseInt(getStyle(parent,"borderTopWidth"));
            y+=parent.offsetTop;
        }
        parent=parent.parentNode;
    }

    return {left:x,
           top:y}
}