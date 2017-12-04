// window.onload=function(){
// 	let shangpin=document.getElementsByClassName('shangpin');
//     var chanpin=document.getElementsByClassName('chanpin');
//     var shuang11=document.getElementsByClassName('shuang11');
//     var fenzhong=document.getElementsByClassName('fenzhong');
//     shangpin[0].onmouseover=function(){
//         chanpin[0].style.display='block';
//         fenzhong[0].style.display='none';
//     }
//     shuang11[0].onmousemove=function(){
//         fenzhong[0].style.display='block';
//         chanpin[0].style.display='none';
//     }
    // var mingchen=document.getElementsByClassName('mingchen');
    // var xuanxiangka=document.getElementsByClassName('xuanxiangka');
    // for(let i=0;i<mingchen.length;i++){
    // 	mingchen[i].onmouseover=function(){
    // 		xuanxiangka[i].style.display='block';
    // 	}
    //     mingchen[i].onmouseout=function(){
    //         xuanxiangka[i].style.display='none';
    //     }
    // }
   
    // for(let i=0;i<)
    // var aaa=document.getElementsByClassName('aaa1');
    // var iconfont=document.getElementsByClassName('i');
    // function  bianse(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
    // 	var arr=[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p];
    // 	for(let i=0;i<mingchen.length;i++){
    // 		aaa[i].onmouseover=function(){
    // 			aaa[i].style.color=arr[i];
    // 			iconfont[i].style.color=arr[i];
    // 		}
    // 		aaa[i].onmouseout=function(){
    // 			iconfont[i].style.color='#fff';
    // 			aaa[i].style.color='#fff';
    // 		}
    //         xuanxiangka[i].onmouseover=function(){
    //             aaa[i].style.color=arr[i];
    //             iconfont[i].style.color=arr[i];
    //         }
    //         xuanxiangka[i].onmouseout=function(){
    //             iconfont[i].style.color='#fff';
    //             aaa[i].style.color='#fff';
    //         }
    // 	}
    // }
    // bianse('#e54077','#427def','#6347ed','#e54077','#6347ed','#427def','#fa5c5c','#f7a831','#f7a831','#427def','#dd2727','#427def','#f7a831','#3bc7b0','#dd2727','#3bc7b0');    
//     var banner=document.getElementsByClassName('banner')[0];
//     var img=document.getElementsByClassName('bannerimg');
//     var dianqu=document.getElementsByClassName('dianqu')[0];
//     var dian=dianqu.getElementsByTagName('li');
//     img[0].style.opacity=1;
//     dian[0].style.background='#fff';
//     console.log(dian);
//     // var t=setInterval(fn1,3000);
//     var num=0;
//     function fn1(){
//         num++;
//         if(num==img.length){
//             num=0;
//         }
//         for(let i=0;i<img.length;i++){
//             img[i].style.opacity=0;
//             dian[i].style.background='#000';
//             dian[i].style.opacity=0.5;
//             img[i].style.zIndex=1;
//         }
//         img[num].style.zIndex=5;
//         img[num].style.opacity=1;
//         dian[num].style.background='#fff';
//         dian[num].style.opacity=0.5;
//     }
//     banner.onmouseover=function(){
//         // clearInterval(t);
//     }
//     banner.onmouseout=function(){
//         // t=setInterval(fn1,3000);
//     }
//     for(let i=0;i<dian.length;i++){
//         dian[i].onmouseover=function(){
//             img[i].style.zIndex=5;
//             img[i].style.opacity=1;
//             img[num].style.opacity=0;
//             img[num].style.zIndex=1;
//             dian[num].style.background='#000';
//             dian[i].style.background='#fff';
//             dian[i].style.opacity=1;
//             num=i;
//         }
//     }
// }
let arr=['#e54077','#427def','#6347ed','#e54077','#6347ed','#427def','#fa5c5c','#f7a831','#f7a831','#427def','#dd2727','#427def','#f7a831','#3bc7b0','#dd2727','#3bc7b0'];
  $('.mingchen').mouseover(function(){
    let ind=$(this).index();
    $(this).find('.xuanxiangka').css('display','block').end().css('background',arr[ind]);
    console.log(arr[ind]);
  }).mouseout(function(){
    $(this).find('.xuanxiangka').css('display','none').end().css('background','');
  })  

let num=0;
let t1=setInterval(dong,3000);
let nums=$('.bannerimg').length;
$('.bannerimg').eq(0).css({'opacity':1});
$('.bannerdian').eq(0).css({'opacity':1,'background':'#fff'})
function dong(){
   num++;
   if(num>nums){
    num=0;
   }
   $('.bannerimg').eq(num).css('opacity',1).siblings().css('opacity',0);
   $('.bannerdian').eq(num).css({'opacity':1,'background':'#fff'}).siblings().css({'opacity':0.5,'background':'#000'});
}
$('.bannerdian').mouseover(function(){
    let index=$(this).index();
    $(this).css({'opacity':1,'background':'#fff'}).siblings().css({'opacity':0.5,'background':'#000'})
    $('.bannerimg').eq(index).css('opacity',1).siblings().css('opacity',0);
    num=index;
   }).parent().prev().find('.banner').mouseover(function(){
    clearInterval(t1);
   }).mouseout(function(){
    t1=setInterval(dong,3000);
   })
$('.fenzhong1').mouseover(function(){
    $(this).css('background','red');
   }).mouseout(function(){
    $(this).css('background','');
   })
$('.shangpin').mouseover(function(){
    $(this).find('.chanpin').css({'zIndex':100,"display":"block"}).closest('.shangpin').next('.shuang11').find('.fenzhong').css({"display":"none"});
}).mouseout(function(){
    $(this).find('.chanpin').css({'zIndex':1,"display":"none"}).closest('.shangpin').next('.shuang11').find('.fenzhong').css({"display":"block"});
})
let color=['#64C333','#000','pink','#007fff','#64C333','pink','#007fff'];
let height=document.documentElement.clientHeight/2;
let down=true,up=false;
let da=true,xiao=false;
let current;
$(window).scroll(function(){
  let stop=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
  $('.louceng').each(function(index,val){
    if(val.offsetTop<=stop+height+30){
      current=index;
       $('.loutisss').eq(index).css('background',color[index]).siblings().css("background","#555");
    }
  })
  let a=$('.branditems').position().top;
  if(stop>=a){
    if(down){
      down=false;
      $('.fixeddd').animate({top:0},function(){
        up=true;
      });
    }
    if(da){
      da=false;
      $('.loutissss').animate({width:40,height:400},function(){
        xiao=true;
      });
      $('.cainixihuan').animate({width:24,height:24,padding:6});
      $('.fanhuisss').animate({width:24,height:24,padding:6});
    }
  }
  else{
    if(up){
      up=false;
      $('.fixeddd').animate({top:-50},function(){
        down=true;
      });
    }
    if(xiao){
      xiao=false;
      $('.loutissss').animate({width:0,height:0},function(){
        da=true;
      });
      $('.cainixihuan').animate({width:0,height:0});
      $('.fanhuisss').animate({width:0,height:0});
    }
  }
  if(document.documentElement.scrollTop>=5800){
    $('.cainixihuan').css('background','#ff0036');
  }else{
    $('.cainixihuan').css('background',"#555");
  }
})
$('.loutisss').click(function(){
  let index=$(this).index();
  current=index;
  $(this).css('background',color[index]);
  let tops=$('.louceng').eq(index).position().top;
  $(document.documentElement).animate({scrollTop:tops-height});
}).mouseover(function(){
  let index=$(this).index();
   $(this).css('background',color[index]);

}).mouseout(function(){
  let index=$(this).index();
  if(current!=index){
    $(this).css('background','#555');
  }
})
$('.cainixihuan').click(function(){
  let tops=$('.wonderfultitle').position().top;
  $(document.documentElement).animate({scrollTop:tops-height+100});
}).mouseover(function(){
  $('.cainixihuan').css('background','#000');
}).mouseout(function(){
  if($(document.documentElement).position().top<=5800){
    $('.cainixihuan').css('background','#555');
  }else{
    $('.cainixihuan').css('background','#ff0036');
  }
})
$('.fanhuisss').click(function(){
  $(document.documentElement).animate({scrollTop:0});
})