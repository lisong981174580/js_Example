/**
 * Created by Administrator on 2017/4/24.
 */
$(function(){

    // document.write(table(10,10));
    // chengfa(9);
    // sanjiao("*" ,10);
    // password(3);

//5、选出100-1000之间的水仙花数

   /* var arr=[];
    for(var i=100;i<1000;i++){

        var a=Math.pow(Math.floor(i/100) ,3);
        var b=Math.pow(Math.floor(i%100/10),3);
        var c=Math.pow(Math.floor(i%10),3);

        if(i==a+b+c){

            arr[arr.length]=i;

        }

    }

    console.log("100-1000之间的水仙花数是"+arr+"");*/


//6、100元 100本书—10元/一本教材  5元/一本辅导书  0.5元/一本练习本 每种几本

    /*for(var a=0;a<100;a++){

         for(var b=0;b<100;b++){

                 for(var c=0;c<100;c++){

                        if((a+b+c)==100&&(10*a+5*b+0.5*c)==100){

                            console.log("教材" +a+ "本,辅导书" +b+ "本,练习本" +c+ "本");

                        }

                }
         }
    }*/

//7、回文数 123321 将10000-99999中所有的回文数打印出来

  /*  for(var i=10000;i<99999;i++){

     var str=String( i );
     var arr=str.split("");
     var newarr=[];
     for(var j=0;j<arr.length;j++){

     newarr[newarr.length]=Number(arr[j]);
     }


     if(bijiao(newarr) ){

     console.log(i);
     }

     }

     function bijiao(arr){

     if(

     (arr[0]==arr[1]-1)&&
     (arr[1]==arr[2]-1)&&
     (arr[2]==arr[3]+1)&&
     (arr[3]==arr[4]+1)

     ){

     return true;

     }

     }
*/



   //  var arr=[[1,2,3],34,45,"ss","bb",[44,45,[34,56,78]]];
   //   bianliHunhe(arr);
   // console.log(bianliHunhe(arr));
   //
   //  var arr2=[3,4,5,6,"","","",4,5,"","",6,7,3];
   //  console.log(qukong(arr2));
   //
   //  var arr3=[2,3,4,5,6,7,2,2,2,7,7,8,8,8,77];
   //  console.log(quchong(arr3));
   //
   //
   //  var arr4=[1,2,3,3,7,5,4,8,9,11,22,33,55];
   //  console.log(sort(arr4,"desc"));
   //
   //
   //  var arr5=[1,2,3,3,7];
   //  console.log(push(arr5,12,"ww"));
   //
   //  var arr6=[1,2,3,3,7,5,4,8,9,11,22,33,55];
   //
   //  console.log(pop(arr6));
   //  console.log(arr6);
   //
   //
   //  var arr7=[22,33,55];
   //  console.log(unshift(arr7 ,"aa",44,"bb"));
   //
   //
   //  var arr8=[22,33,55,22,33,44,5,6,7,7];
   //  console.log(shift(arr8));
   //  console.log(arr8);
   //
   //
   //  var arr9=[22,33,55,22,33,44,5,6,7,7];
   //  var arr10=[22,33,55];
   //  var  arr11=[2,3,4,5,6,7,6];
   //
   //  console.log(concat(arr9,arr10,arr11));

    // console.log(oushuHe(0,10));
    //
    // var arr11=[12,34,67,444,67,3,4,7,8];
    // console.log(arrMax(arr11));
    //
    // var div1=getClass("box");
    // console.log(div1[0]);
    //
    // var newarr=getClass("box2",div1[0]);
    // console.log(newarr);


    // var gg=document.getElementsByClassName("box")[0];
    // console.log(getText(gg ));
    // console.log(getText(gg,"我是李松" ));
    // console.log(getText(gg ));
    //
    //
    // console.log(getStyle(gg,"width"));




    /*让一个宽高都是200*200px的div,点击一下后，以每200毫秒增大10px的速度增大，到宽高都是400px后，
     然后再以同样的速度减小到原始尺寸；*/
//第一种方法：

    
     var box=document.getElementsByClassName("box")[0];
     box.onclick=function () {
     var i=0;
     const c=200;
     var flag=true;

     var t=setInterval(function () {
     if(flag){
     i+=10;
     box.style.width=c+i+"px";
     box.style.height=c+i+"px";
     if(i==200){

     flag=false;
     }

     }else{

     i-=10;
     box.style.width=c+i+"px";
     box.style.height=c+i+"px";
     if(i==0){

     clearInterval(t);
     }

     }



     },200)

     }
    

//第二种无限增大过程：
    /*  box=document.getElementsByClassName('box')[0];
     box.onclick=function () {
     box.style.width='200px';
     box.style.height='200px';
     setInterval(function(){
     var oW=parseInt(box.style.width);
     var oH=parseInt(box.style.height);
     oW=oW==400?200:oW;
     oH=oH==400?200:oH;
     box.style.width=(oW+10)+'px';
     box.style.height=(oH+10)+'px';
     },200)
     }*/

//第三种方法：
    /* box=document.getElementsByClassName('box')[0];
     box.onclick=function(){
     box.style.width='200px';
     box.style.height='200px';
     var flag=true;
     var t=setInterval(function(){
     var oW=parseInt(box.style.width);
     var oH=parseInt(box.style.height);
     if(flag){
     box.style.width=(oW+10)+'px';
     box.style.height=(oH+10)+'px';
     if(oW==390){
     flag=false;
     }
     }else{
     box.style.width=(oW-10)+'px';
     box.style.height=(oH-10)+'px';
     if(oW==210){
     clearInterval(t);//循环一次；
     //                          flag=true;//无限循环；
     }
     }
     },200)
     }*/



    var gg=$(".box2");
    var gg1=$("#box3");
    var gg3=$("div")
    console.log(gg);
    console.log(gg1);
    console.log(gg3);


   


   
    
})//页面加载后执行



