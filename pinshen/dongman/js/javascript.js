//1.透明轮播
function touming(box,img,btns,btn,left,right,color1,color2,t1){
   var box=document.getElementsByClassName(box)[0];
   var img=document.getElementsByClassName(img);
   var dians=document.getElementsByClassName(btns)[0];
   var dian=dians.getElementsByTagName(btn);
   var left=document.getElementsByClassName(left)[0];
   var right=document.getElementsByClassName(right)[0];
   var flag=true;
   for(let i=0;i<img.length;i++){
      img[i].style.opacity=0;
      dian[i].style.background=color2;
   }
   img[0].style.opacity=1;
   dian[0].style.background=color1;
   var num=0;
   var t=setInterval(fn1,t1);
   function fn1(){
    flag=false;
    num++;
    if(num==img.length){
      num=0;
    }
    for(let i=0;i<img.length;i++){
      animate(img[i],{opacity:0},function(){
        dian[i].style.background=color2;
      })
    }
    animate(img[num],{opacity:1},function(){
      dian[num].style.background=color1;
      flag=true;
    });
   }
    function fn2(){
      flag=false;
      num--;
      if(num==-1){
        num=img.length-1;
      }
      for(let i=0;i<img.length;i++){
        animate(img[i],{opacity:0},function(){
        dian[i].style.background=color2;
        })
      }
      animate(img[num],{opacity:1},function(){
        dian[num].style.background=color1;
        flag=true;
      });
    }
    left.onclick=function(){
      if(flag){
        fn2();
      }
    }
    right.onclick=function(){
      if(flag){
        fn1();
      }
    }
    for(let i=0;i<dian.length;i++){
      dian[i].onmouseover=function(){
        if(flag){
          for(let j=0;j<img.length;j++){
          img[j].style.opacity=0;
          }
          animate(img[i],{opacity:0});
          animate(img[i],{opacity:1},500,function(){
          dian[i].style.background=color1;
          dian[num].style.background=color2;
          num=i;
        })
        } 
      }
    }
    box.onmouseover=function(){
      clearInterval(t);
    }
    box.onmouseout=function(){
      t=setInterval(fn1,t1);
    }
 }



//2.双下标轮播
	function shuangxiabiao(box,img,btns,btn,left,right,color1,color2,time){
    var box=document.getElementsByClassName(box)[0];
    var img=document.getElementsByClassName(img);
    var dians=document.getElementsByClassName(btns)[0];
    var dian=dians.getElementsByTagName(btn);
    var left=document.getElementsByClassName(left)[0];
    var right=document.getElementsByClassName(right)[0];
    dian[0].style.background=color1;
    var widths=box.offsetWidth;
    var t=setInterval(fn1,time);
    var now=0,next=0;
    var flag=true;
    function fn1(){
    	flag=false;
    	next++;
    	if(next==img.length){
    		next=0;
    	}
        img[next].style.left=widths+'px';
        img[now].style.left=0;
        animate(img[now],{left:-widths},500);
        animate(img[next],{left:0},500,function(){
        	for(let i=0;i<dian.length;i++){
        		dian[i].style.background=color2;
        	}
        	dian[next].style.background=color1;
        	flag=true;
        });
        now=next;
    }
    function fn2(){
    	flag=false;
    	next--;
    	if(next==-1){
    		next=img.length-1;
    	}
    	img[next].style.left=-widths+'px';
    	img[now].style.left=0;
    	animate(img[next],{left:0},500);
    	animate(img[now],{left:widths},500,function(){
    		for(let i=0;i<dian.length;i++){
    			dian[i].style.background=color2;
    		}
    		dian[next].style.background=color1;
    		flag=true;
    	});
    	now=next;
    }
    left.onclick=function(){
    	if(flag){
    	fn2();	
        }    	
    }
    right.onclick=function(){
    	if(flag){
    	fn1();	
        }    	
    }
    box.onmouseout=function(){
    	t=setInterval(fn1,time);
    }
    box.onmouseover=function(){
    	clearInterval(t);
    }
    for(let i=0;i<dian.length;i++){
    	dian[i].onclick=function(){
    		flag=false;
    		if(i==now){
    			flag=true;
    		    return;
    	    }
    	    else if(i<now){
    		    // now=i;
    		    // next=i;
    		    // fn2();
    		    img[i].style.left=-widths+'px';
    		    img[now].style.left=0;
    		    animate(img[now],{left:widths});
    		    animate(img[i],{left:0},function(){
    		    	for(let j=0;j<dian.length;j++){
    			      dian[j].style.background=color2;
    		        }
    		        dian[i].style.background=color1;
    		    	flag=true;
    		    });
    		    now=i;
    		    next=i;
    	    }
    	    else if(i>now){
    		    // now=i;
    		    // next=i;
    		    // fn1();
    		    img[i].style.left=widths+'px';
    		    img[now].style.left=0;
    		    animate(img[i],{left:0});
    		    animate(img[now],{left:-widths},function(){
    		    	for(let j=0;j<dian.length;j++){
    			    dian[j].style.background=color2;
    		        }
    		        dian[i].style.background=color1;
    		    	flag=true;
    		    });
    		    now=i;
    		    next=i;
    	    }    
    	    }
    	
    }
 }
//选项卡
function xuanxiangka1(btn,btns,color1,color2){
   let btn=document.getElementsByClassName(btn);
   let btns=document.getElementsByClassName(btns);
   for(let i=0;i<btn.length;i++){
      btn[i].onmouseover=function(){
        btns[i].style.display='block';
        btn[i].style.background=color1;
      }
      btn[i].onmouseout=function(){
        btns[i].style.display='none';
        btn[i].style.background=color2;
      }
   }
}

function xuanxiangka2(btn,btns,color1,color2){
   let btn=document.getElementsByClassName(btn);
   let btns=document.getElementsByClassName(btns);
   for(let i=0;i<btn.length;i++){
    btn[i].onmouseover=function(){
      for(let j=0;j<btns.length;j++){
        btns[j].style.display='none';
        btns[j].style.background=color2;
      }
      btns[i].style.display='block';
      btns[i].style.background=color1;
    }
   }
}